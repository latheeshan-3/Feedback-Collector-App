import axios from "axios";
import { Feedback } from "@/types/feedback";


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!; // from env 


//  Get all feedbacks
export async function getFeedbacks(): Promise<Feedback[]> {
  try {
    const response = await axios.get<Feedback[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return [];
  }
}

//  Send new feedback
export async function sendFeedback(
  data: Omit<Feedback, "_id" | "createdAt">
): Promise<boolean> {
  try {
    await axios.post(BASE_URL, data);
    return true;
  } catch (error) {
    console.error("Error sending feedback:", error);
    return false;
  }
}
