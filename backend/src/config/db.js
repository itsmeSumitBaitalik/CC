import mongoose from "mongoose";

const db = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit process if DB fails
  }
};
const connectDB = db
export default connectDB;