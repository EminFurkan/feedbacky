import { Request, Response } from 'express';
import { getDashboard } from '../../controllers/dashboard-controller';
import { getFeedbacks } from '../../services/feedback-service';
import ejs from 'ejs';
import path from 'path';

jest.mock('../services/feedback-service');

describe('Dashboard Controller', () => {
  it('should render the dashboard page with feedbacks', async () => {
    const mockRequest = {} as Request;
    const mockResponse = {} as Response;
    const mockFeedbacks = [
      { _id: '1', customer: 'Trendyol', message: 'Test message 1' },
      { _id: '2', customer: 'Trendyol', message: 'Test message 2' },
    ];

    getFeedbacks.mockResolvedValue(mockFeedbacks);

    mockResponse.setHeader = jest.fn();
    mockResponse.send = jest.fn();

    const ejsFilePath = path.join(__dirname, '../views/dashboard.ejs');
    ejs.renderFile = jest.fn((filePath, data, callback) => {
      callback(null, 'Mock HTML'); // Replace this with your actual rendered HTML
    });

    await getDashboard(mockRequest, mockResponse);

    expect(ejs.renderFile).toHaveBeenCalledWith(ejsFilePath, { feedbacks: mockFeedbacks }, expect.any(Function));
    expect(mockResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'text/html');
    expect(mockResponse.send).toHaveBeenCalledWith('Mock HTML');
  });
});
