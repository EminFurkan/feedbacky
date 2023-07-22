import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Feedbacky from './feedbacky';
import { postMessage } from '@/services/feedback-service';
import { MESSAGE_SUCCESS_TEXT, ERROR_TEXT } from '@/constants/texts';

jest.mock('@/services/feedback-service', () => ({
  postMessage: jest.fn().mockResolvedValue({
    message: 'Test message',
  }),
}));

describe('Feedbacky Component', () => {
  it('should render without crashing', () => {
    render(<Feedbacky />);
  });

  it('should toggle dialog visibility on icon button click', () => {
    render(<Feedbacky />);
    const iconButton = screen.getByTestId('feedback-icon-button');

    expect(screen.queryByTestId('feedback-modal')).not.toBeInTheDocument();
    fireEvent.click(iconButton);
    expect(screen.getByTestId('feedback-modal')).toBeInTheDocument();
  });

  it('should post message successfully and display success message', async () => {
    render(<Feedbacky />);
    const iconButton = screen.getByTestId('feedback-icon-button');

    fireEvent.click(iconButton);
    const input = screen.getByLabelText('Feedback Message');
    const sendButton = screen.getByText('Send');

    const testMessage = 'This is a test message';
    fireEvent.change(input, { target: { value: testMessage } });
    fireEvent.click(sendButton);

    expect(postMessage).toHaveBeenCalledWith(testMessage);

    await waitFor(() => {
      const successText = screen.getByText(MESSAGE_SUCCESS_TEXT);
      expect(successText).toBeInTheDocument();
    });
  });

  it('should display error message when message length exceeds the limit', async () => {
    render(<Feedbacky />);
    const iconButton = screen.getByTestId('feedback-icon-button');

    fireEvent.click(iconButton);
    const input = screen.getByLabelText('Feedback Message');

    const longMessage = 'a'.repeat(3000);
    fireEvent.change(input, { target: { value: longMessage } });

    await waitFor(() => {
      const errorText = screen.getByText(ERROR_TEXT);
      expect(errorText).toBeInTheDocument();
    });
  });
});
