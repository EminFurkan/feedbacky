import express from 'express';
import { getDashboard } from '../controllers/dashboard-controller';

const router = express.Router();

// GET /dashboard
router.get('/', getDashboard);

export default router;
