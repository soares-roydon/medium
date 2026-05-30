import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { verify } from "hono/jwt";

// Added generic types for env & storing userId
const app = new Hono().basePath("/api/v1");

app.route("/user", userRouter)
app.route("/blog", blogRouter)


export default app;
