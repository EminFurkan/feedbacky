import express, { Express, Request, Response } from 'express';
import rateLimit from "express-rate-limit";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { getDashboard } from './controllers/dashboard-controller';
import { createFeedbackController } from './controllers/feedback-controller';
import { connectToDB } from './config/db.conf';
import { RATE_LIMIT_NUM, RATE_LIMIT_WINDOW } from './constants/constants';

dotenv.config({ path: './environment/.env' });

// Set up rate limiter
const limiter = rateLimit({ 
  windowMs: RATE_LIMIT_WINDOW,
  max: RATE_LIMIT_NUM, // Maximum number of requests from a single IP within the time window
});

const app: Express = express();
const PORT = process.env.PORT;

// Connect to MongoDB
connectToDB()
  .then(() => {
    app.listen(process.env.MONGO_PORT, () => {
      console.log(`Mongo Server is running on http://localhost:${process.env.MONGO_PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start the server:', error);
  });
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.send('Feedbacky Server');
});

app.post("/api/feedback", limiter, createFeedbackController);
app.get("/api/dashboard", limiter, getDashboard);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

export default app;