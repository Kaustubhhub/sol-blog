import express from "express";

const app = express();

app.get("/",(req,res) => {
	res.send({message:"The server is healthy"})
})


app.listen(8000,()=>{
	console.log("The server is running on port 8000")
})
