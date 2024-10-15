import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });

    const token = await sign({ id: user.id }, c.env.SECRET_KEY);
    return c.json({
      jwt: token,
    });
  } catch (error) {
    return c.status(403);
  }
});

userRouter.post("/signin", async (c) => {
  console.log("sign in");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return c.json(
      {
        msg: "user not found",
      },
      403
    );
  }
  const token = await sign({ id: user.id }, c.env.SECRET_KEY);
  return c.json({
    jwt: token,
  });
});

userRouter.post("/blog", (c) => {
  //@ts-ignore
  console.log(c.get("userId"));
  return c.text("user logged in");
});
userRouter.put("/api/v1/user/blog", (c) => {
  return c.text("Hello Hono!");
});
userRouter.get("/api/v1/user/:id", (c) => {
  return c.text("Hello Hono!");
});
userRouter.get("/api/v1/user/bulk", (c) => {
  return c.text("Hello Hono!");
});
