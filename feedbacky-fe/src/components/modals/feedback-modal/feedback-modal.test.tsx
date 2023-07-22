import { render, fireEvent } from '@testing-library/react';
import FeedbackModal from './feedback-modal';

describe('FeedbackModal Component', () => {
  const mockOpen = true;
  const mockOnClose = jest.fn();
  const mockOnChange = jest.fn();
  const mockOnClick = jest.fn();
  const mockResponse = {
    text: 'Success!',
    type: 'success' as const
  };

  it('should render the component with response text', () => {
    const { getByText } = render(
      <FeedbackModal
        open={mockOpen}
        onClose={mockOnClose}
        onChange={mockOnChange}
        onClick={mockOnClick}
        text={mockResponse.text}
        type={mockResponse.type}
      />
    );

    const responseText = getByText(mockResponse.text);
    expect(responseText).toBeInTheDocument();
  });

  it('should render the component with feedback form', () => {
    const { getByLabelText, getByText } = render(
      <FeedbackModal
        open={mockOpen}
        onClose={mockOnClose}
        onChange={mockOnChange}
        onClick={mockOnClick}
        text={mockResponse.text}
        type={mockResponse.type}
      />
    );

    const textarea = getByLabelText('Your message');
    const sendButton = getByText('Send');
    expect(textarea).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
  });

  it('should call the onClick function when the Send button is clicked', () => {
    const { getByText } = render(
      <FeedbackModal
        open={mockOpen}
        onClose={mockOnClose}
        onChange={mockOnChange}
        onClick={mockOnClick}
        text={mockResponse.text}
        type={mockResponse.type}
      />
    );

    const sendButton = getByText('Send');
    fireEvent.click(sendButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
