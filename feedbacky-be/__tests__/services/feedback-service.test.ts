import { getFeedbacks, createFeedback } from '../../services/feedback-service';
import Feedback, { FeedbackDocument } from '../../models/feedback';

jest.mock('../models/feedback');

describe('Feedback Service', () => {
  it('should create a new feedback entry', async () => {
    // Mock the save function of the Feedback model
    const mockSave = jest.fn().mockResolvedValue({ _id: '1', customer: 'Trendyol', message: 'Test message', createdAt: new Date() });
    Feedback.prototype.save = mockSave;

    const createdFeedback = await createFeedback('Test message');
    expect(createdFeedback).toEqual({ _id: '1', customer: 'Trendyol', message: 'Test message', createdAt: expect.any(Date) });
  });

  it('should get all feedback entries for the customer', async () => {
    const mockFeedbacks: FeedbackDocument[] = [
      { _id: '1', customer: 'Trendyol', message: 'Test message 1', createdAt: new Date() },
      { _id: '2', customer: 'Trendyol', message: 'Test message 2', createdAt: new Date() },
    ];
    // Mock the find function of the Feedback model
    const mockFind = jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockFeedbacks) });
    Feedback.find = mockFind;

    const feedbacks = await getFeedbacks();
    expect(feedbacks).toEqual(mockFeedbacks);
  });
});
