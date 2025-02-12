import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ message: "The server is healthy" });
})

app.listen(8000, () => {
	console.log("The server is running on port 8000")
})