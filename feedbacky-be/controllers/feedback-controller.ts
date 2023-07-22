import { Request, Response } from 'express';
import { createFeedback, getFeedbacks } from '../services/feedback-service';

export const createFeedbackController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const feedback = await createFeedback(message);
    res.status(201).json(feedback);
  } catch (error) {
    console.error('Error creating feedback:', error);
    res.status(500).json({ error: 'Failed to create feedback' });
  }
};

export const getFeedbacksController = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbacks = await getFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    console.error('Error getting feedbacks:', error);
    res.status(500).json({ error: 'Failed to get feedbacks' });
  }
};
