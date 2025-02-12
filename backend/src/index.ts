import express from "express";
import cors from "cors";
import connectToDatabase from "./database/postgres";
import authRouter from "./routes/auth.route";
import blogRouter from "./routes/blog.route";
import filterRoutes from "./routes/filter.route";
import likeCommentRouter from "./routes/likes_comments.route";
import solanaRouter from "./routes/sol.route";
import userRouter from "./routes/user.route";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/blogs", blogRouter)
app.use("/api/v1/filters", filterRoutes)
app.use("/api/v1/likes_comments", likeCommentRouter)
app.use("/api/v1/sol", solanaRouter)
app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
	res.send({ message: "The server is healthy" });
})

app.listen(8000, async () => {
	console.log("The server is running on port 8000")
	await connectToDatabase();
})