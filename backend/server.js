import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./db.js";
import { userRegister, userLogin } from "./src/controllers/userControllers.js";

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/eventra";

const router = express.Router();

// Middlewares
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

// Connect route
router.post("/register", userRegister);
router.post("/login", userLogin)
app.use("/", router); 

// Start server
app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});

// Connect to DB
connectDB();
