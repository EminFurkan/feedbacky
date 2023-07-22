import React, { ReactElement, CSSProperties } from 'react';
import './icon-button.scss';
import SVGGenerator from '@/modules/svg-generator';
import { IconType } from '@/enums/icon-type-enums';

interface IconButtonProps {
  iconType: IconType;
  iconColor: string;
  onClick: () => void;
  customStyle: CSSProperties;
  width: string;
  height: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconType, onClick, iconColor, customStyle, width, height }: IconButtonProps): ReactElement => {
  return (
    <div data-testid="feedback-icon-button" className='icon-button' role='button' onClick={onClick} style={customStyle}>
      <SVGGenerator type={iconType} color={iconColor} width={width} height={height} />
    </div>
  );
}

export default IconButton;