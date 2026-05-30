import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

// Added generic types for env & storing userId
const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Auth middleware for all /blog/* requests
blogRouter.use("/*", async (c, next) => {
  const token = c.req.header("authorization")?.split(" ")[1];

  if (!token) {
    c.status(403);
    return c.json({ message: "Token missing" });
  }

  try {
    const payload = await verify(token, c.env.JWT_SECRET, "HS256");

    c.set("userId", payload.id as string);
    await next();
    
  } catch (e) {
    c.status(403);
    return c.json({ message: "Unauthorized" });
  }
});

// Blog routes
// 1. Add a new blog
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: c.get("userId"),
    },
  });

  return c.json({ id: blog.id });
});

// 2. Edit an existing blog
blogRouter.put("/:id", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const blog = await prisma.post.update({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json({ id: blog.id });
  } catch (e) {
    c.status(411);
    c.json({ message: "Error while updating" });
  }
});

// 3. Get all the blogs
// Todo: Add pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany({
    where: {
      published: true,
    },
    take: 10,
  });

  return c.json({ blogs });
});

// 4. Get a blog with an id
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    accelerateUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: c.req.param("id"),
      },
    });

    return c.json({ blog });
  } catch {
    c.status(500);
    c.json({ message: "Error while fetching the blog" });
  }
});

export { blogRouter };
