import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono().basePath("/api/v1");

app.use("/api/v1/*", cors())

app.route("/user", userRouter)
app.route("/blog", blogRouter)


export default app;
