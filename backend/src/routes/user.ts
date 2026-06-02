import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@roydon-soares/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// User Routes
// 1. Signup route
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const {success, data} = signupInput.safeParse(body)

  if(!success) {
    c.status(400)
    return c.json({message: "Invalid input"})
  }

  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token });
  } catch (e) {
    c.status(400);
    return c.json({ message: "Error while signing up" });
  }
});

// 2. Signin route
userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success, data } = signinInput.safeParse(body)

  if(!success) {
    c.status(400)
    return c.json({message: "Invalid input"})
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
        password: data.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ message: "Invalid credentials" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token });
  } catch (e) {
    c.status(500);
    return c.json({ message: "Some internal error occurred" });
  }
});
