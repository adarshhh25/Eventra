import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Failed:", error.message);
        process.exit(1);
    }
}

export default connectDB;
