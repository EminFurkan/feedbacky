import Feedback, { FeedbackDocument } from "../models/feedback";

export const createFeedback = async (message: string): Promise<FeedbackDocument> => {
  const feedback = new Feedback({ message, customer: 'Trendyol' });
  return feedback.save();
};

export const getFeedbacks = async (): Promise<FeedbackDocument[]> => {
  return Feedback.find({ customer: 'Trendyol' }).exec();
};
