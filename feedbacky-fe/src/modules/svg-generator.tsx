import React, { ReactElement } from 'react';
import { IconType } from '@/enums/icon-type-enums';
import FeedbackIcon from '@/assets/feedback-icon';

interface SVGProps {
  type: IconType;
  color: string;
  width: string;
  height: string;
}

const SVGGenerator: React.FC<SVGProps> = ({ type, color, width, height }: SVGProps): ReactElement | null => {
  const icons: { [key: string]: ReactElement } = {
    feedback: <FeedbackIcon />
  };

  const getIconComponent = (): ReactElement | null => {
    if (icons[type]) {
      return icons[type];
    }
    return null;
  };

  return (
    <div style={{ color: color, width: width, height: height }}>
      { getIconComponent() }
    </div>
  );
};

export default SVGGenerator;