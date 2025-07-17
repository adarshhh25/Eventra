import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db.js"

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/eventra";

app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`)
})

connectDB();