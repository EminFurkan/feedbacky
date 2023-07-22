import { Request, Response } from 'express';
import { getFeedbacks } from '../services/feedback-service';
import ejs from 'ejs';
import path from 'path';

export const getDashboard = async (req: Request, res: Response): Promise<void> => {
  try {
    const feedbacks = await getFeedbacks();

    const ejsFilePath = path.join(__dirname, '../views/dashboard.ejs');

    ejs.renderFile(ejsFilePath, { feedbacks }, (err, html) => {
      if (err) {
        console.error('Error rendering EJS template:', err);
        res.status(500).json({ error: 'Failed to render EJS template' });
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
      }
    });
  } catch (error) {
    console.error('Error getting feedbacks:', error);
    res.status(500).json({ error: 'Failed to get feedbacks' });
  }
};
