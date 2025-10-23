import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";

// GET all feedbacks
export const getFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
};

// POST new feedback
export const createFeedback = async (req: Request, res: Response) => {
  try {
    const { name, message } = req.body;
    if (!name || !message)
      return res.status(400).json({ message: "Name and message are required" });

    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();

    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: "Error saving feedback", error });
  }
};
