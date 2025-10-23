import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./utils/db";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/feedbackDB";

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(` Server live on  http://localhost:${PORT}`);
  });
});
