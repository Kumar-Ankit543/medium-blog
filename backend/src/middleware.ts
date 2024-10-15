import { Hono } from "hono";
import { verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    SECRET_KEY: string;
  };
}>();

app.use("/api/v1/user/blog/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json(
      {
        error: "Invalid token",
      },
      403
    );
  }
  const token = authHeader.split(" ")[1];
  const payload = await verify(token, c.env.SECRET_KEY);
  if (!payload) {
    return c.json(
      {
        error: "Unauthorized user",
      },
      403
    );
  }
  // @ts-ignore
  c.set("userId", payload.id);
  await next();
});
