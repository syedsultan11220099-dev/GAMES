import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB Error:", err);
  }
};
