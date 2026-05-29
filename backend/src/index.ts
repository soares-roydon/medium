import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>().basePath("/api/v1");

app.use("/api/v1/blog/*", async(c, next) => {
  const token = c.req.header("authorization")?.split(" ")[1]

  if(!token) {
    c.status(403)
    return c.json({message: "Token missing"})
  }

  try {
    const response = await verify(token, c.env.JWT_SECRET, "HS256")
    next()

  } catch {
    c.status(403)
    c.json({message: "Invalid token"})
  }

})

app.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token });
  } catch (e) {
    c.status(403);
    return c.json({ message: "Error while signing up" });
  }
});

app.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "User not found" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token });
  } catch (e) {
    c.status(500);
    return c.json({ message: "Some internal error occurred" });
  }
});

app.post("/blog", (c) => {
  return c.json({});
});

app.put("/blog", (c) => {
  return c.json({});
});

app.get("/blog/:id", (c) => {
  return c.json({});
});

export default app;
