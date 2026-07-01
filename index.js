import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/abc", (req, res) => {
    res.send("ABC");
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})