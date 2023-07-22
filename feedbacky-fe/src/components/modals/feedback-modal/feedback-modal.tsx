import React, { ReactElement } from 'react';
import { BlDialog, BlButton, BlTextarea } from "@trendyol/baklava/dist/baklava-react";
import './feedback-modal.scss';
import { ERROR_TEXT } from '@/constants/texts';
import { MAX_MESSAGE_LENGTH } from '@/constants/limits';
import { CAPTION } from './constants';

interface FeedbackModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (event: CustomEvent<string>) => void;
  onClick: () => void;
  type: string;
  text: string;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ open, onClose, onChange, onClick, text, type }: FeedbackModalProps): ReactElement => {
  return (
    <BlDialog data-testid="feedback-modal" className="dialog" open={open} caption={CAPTION} onBlDialogRequestClose={onClose}>
      <div className="dialog-content">
        {
          type ? (
            <div className={`response-text ${type}`}>{text}</div>
          ) : (
            <>
              <BlTextarea label="Your message" onBlInput={onChange} maxlength={MAX_MESSAGE_LENGTH} characterCounter invalid-text={ERROR_TEXT}></BlTextarea>
              <BlButton variant="primary" type="submit" onBlClick={onClick}>Send</BlButton>
            </>
          )
        }
      </div>
    </BlDialog>
  );
}

export default FeedbackModal;