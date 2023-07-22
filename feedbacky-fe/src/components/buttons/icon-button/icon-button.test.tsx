import { render, fireEvent } from '@testing-library/react';
import IconButton from './icon-button';
import { IconType } from '@/enums/icon-type-enums';

describe('IconButton Component', () => {
  const mockOnClick = jest.fn();
  const mockIconColor = '#ff0000';
  const mockCustomStyle = { fontWeight: 'bold' };

  it('should render the IconButton component', () => {
    const { container } = render(
      <IconButton
        iconType={IconType.Feedback}
        iconColor={mockIconColor}
        onClick={mockOnClick}
        width='50px'
        height='50px'
        customStyle={mockCustomStyle}
      />
    );

    const iconButton = container.querySelector('.icon-button');
    expect(iconButton).toBeInTheDocument();
  });

  it('should call the onClick function when the button is clicked', () => {
    const { container } = render(
      <IconButton
        iconType={IconType.Feedback}
        iconColor={mockIconColor}
        onClick={mockOnClick}
        width='50px'
        height='50px'
        customStyle={mockCustomStyle}
      />
    );

    const iconButton = container.querySelector('.icon-button');
    fireEvent.click(iconButton!);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
