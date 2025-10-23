import express from "express";
import { getFeedbacks, createFeedback } from "../controllers/feedback.controller";

const router = express.Router();

router.get("/", getFeedbacks);
router.post("/", createFeedback);

export default router;
