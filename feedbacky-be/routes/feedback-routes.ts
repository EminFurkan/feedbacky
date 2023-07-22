import express from 'express';
import { createFeedbackController, getFeedbacksController } from '../controllers/feedback-controller';

const router = express.Router();

// POST /feedback
router.post('/', createFeedbackController);
router.get('/', getFeedbacksController);

export default router;
