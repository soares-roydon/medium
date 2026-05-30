import { Hono } from "hono";
import { verify } from "hono/jwt"

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

// Auth middleware for all /blog/* requests
blogRouter.use("/*", async(c, next) => {
  const token = c.req.header("authorization")?.split(" ")[1]

  if(!token) {
    c.status(403)
    return c.json({message: "Token missing"})
  }

    const payload = await verify(token, c.env.JWT_SECRET, "HS256")
    if(!payload.id) {
      c.status(403)
      return c.json({message: "Unauthorized"})
    }

    c.set("userId", payload.id as string)
    await next()
})

// Blog routes
// 1. Add a new blog
blogRouter.post("/", (c) => {
  return c.json({});
});

// 2. Edit an existing blog
blogRouter.put("/", (c) => {
  return c.json({});
});

// 3. Get a blog with an id
blogRouter.get("/:id", (c) => {
  return c.json({});
});

// 4. Get all the blogs
blogRouter.get("/bulk", (c) => {
  return c.json({})
})

export { blogRouter }