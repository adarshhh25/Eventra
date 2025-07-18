import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db.js";
import { userRegister } from "./src/controllers/userControllers.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/eventra";

const router = express.Router();

// Middlewares
app.use(express.json());

// Connect route
router.post("/register", userRegister);
app.use("/", router); 

// Start server
app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});

// Connect to DB
connectDB();
