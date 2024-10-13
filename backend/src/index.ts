import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET_KEY: string;
  };
}>();

app.post("/api/v1/user/signup", async (c) => {
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

app.post("/api/v1/user/signin", async (c) => {
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

app.post("/api/v1/user/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/api/v1/user/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/user/:id", (c) => {
  return c.text("Hello Hono!");
});
app.get("/api/v1/user/bulk", (c) => {
  return c.text("Hello Hono!");
});

export default app;
