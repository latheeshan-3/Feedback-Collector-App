import mongoose from "mongoose";
import dotenv from "dotenv";
import { Feedback } from "./models/feedback.model";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/feedbackDB";

const dummyFeedbacks = [
  { name: "Bavi", message: "It's awesome man" },
  { name: "Alice", message: "Loved this app!" },
  { name: "John", message: "Great work, keep it up!" },
  { name: "Sarah", message: "Very helpful." },
  { name: "Mike", message: "Amazing functionality!" }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(" MongoDB connected");

    // Optional Clear existing data
    await Feedback.deleteMany({});
    console.log("🗑 Existing feedbacks deleted");

    // Insert dummy data
    const feedbacks = await Feedback.insertMany(dummyFeedbacks);
    console.log(`Inserted ${feedbacks.length} dummy feedbacks`);

    mongoose.connection.close();
    console.log(" Connection closed");
  } catch (err) {
    console.error(" Error seeding database:", err);
  }
};

seedDB();
