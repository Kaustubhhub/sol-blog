import express from "express";
import cors from "cors";
import connectToDatabase from "./database/postgres";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ message: "The server is healthy" });
})

app.listen(8000, async () => {
	console.log("The server is running on port 8000")
	await connectToDatabase();
})