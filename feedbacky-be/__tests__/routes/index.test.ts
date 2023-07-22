import request from 'supertest';
import app from '../../index';

describe('Feedbacky Server', () => {
  it('should respond with "Feedbacky Server" on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Feedbacky Server');
  });

  it('should create a new feedback entry on POST /api/feedback', async () => {
    const response = await request(app).post('/api/feedback').send({ message: 'Test feedback message' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('customer', 'Trendyol');
    expect(response.body).toHaveProperty('message', 'Test feedback message');
  });
});
