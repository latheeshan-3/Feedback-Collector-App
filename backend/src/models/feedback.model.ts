import mongoose, { Schema, Document } from "mongoose";

export interface IFeedback extends Document {
  name: string;
  message: string;
  createdAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>(
  {
    name: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "feedbacks", // collection name
  }
);

export const Feedback = mongoose.models.Feedback || mongoose.model<IFeedback>("Feedback", FeedbackSchema);
