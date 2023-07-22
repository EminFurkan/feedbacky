import { Request, Response } from 'express';
import { createFeedbackController } from '../../controllers/feedback-controller';
import { createFeedback, getFeedbacks } from '../../services/feedback-service';

jest.mock('../../services/feedback-service', () => ({
  createFeedback: jest.fn(),
}));

describe('createFeedbackController', () => {
  it('should create a new feedback entry', async () => {
    const mockRequest = { body: { message: 'Test feedback message' } } as Request;
    const mockResponse = {} as Response;
    const mockCreatedFeedback = { _id: '1', customer: 'Trendyol', message: 'Test feedback message' };

    (createFeedback as jest.Mock).mockResolvedValue(mockCreatedFeedback);

    mockResponse.status = jest.fn().mockReturnThis();
    mockResponse.json = jest.fn((data: object) => {
      expect(data).toEqual(mockCreatedFeedback);
    });

    await createFeedbackController(mockRequest, mockResponse);
  });

  it('should respond with an error if message is missing', async () => {
    const mockRequest = { body: {} } as Request;
    const mockResponse = {} as Response;

    mockResponse.status = jest.fn().mockReturnThis();
    mockResponse.json = jest.fn((data: object) => {
      expect(data).toEqual({ error: 'Message is required' });
    });

    await createFeedbackController(mockRequest, mockResponse);
  });
});
