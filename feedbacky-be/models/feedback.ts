import mongoose, { Document, Schema } from 'mongoose';

export interface FeedbackDocument extends Document {
  customer: string;
  message: string;
  createdAt: Date;
}

const feedbackSchema = new Schema<FeedbackDocument>(
  {
    customer: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'feedback' }
);

const Feedback = mongoose.model<FeedbackDocument>('Feedback', feedbackSchema);

export default Feedback;
