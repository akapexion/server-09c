import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db_connection.js";

const app = express();
dotenv.config();
dbConnect();


app.get("/abc", (req, res) => {
    res.send("ABC");
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})