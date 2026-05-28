import { Hono } from "hono";

const app = new Hono().basePath("/api/v1");

app.post("/signup", (c) => {
  return c.json({});
});

app.post("/signin", (c) => {
  return c.json({});
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
