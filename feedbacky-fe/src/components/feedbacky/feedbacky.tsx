import React, { ReactElement, useCallback, useState } from 'react';
import './feedbacky.scss';
import IconButton from "../buttons/icon-button/icon-button";
import FeedbackModal from "../modals/feedback-modal/feedback-modal";
import { ICON_BUTTON_STYLE } from './constants';
import { MESSAGE_ERROR_TEXT, MESSAGE_SUCCESS_TEXT } from '@/constants/texts';
import { Colors } from '@/constants/colors-codes';
import { postMessage } from '@/services/feedback-service';
import { IconType } from '@/enums/icon-type-enums';
import { MAX_MESSAGE_LENGTH } from '@/constants/limits';

export interface ResponseState {
  text: string;
  type: 'success' | 'error' | null;
}

const Feedbacky: React.FC = (): ReactElement => {
  // #local state
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [response, setResponse] = useState<ResponseState>({
    text: '',
    type: null
  });

  // #functions
  const handleDialogVisibility = () => {
    setOpenDialog(prev => !prev);
    setMessage('');
    setResponse({
      text: '',
      type: null
    });
  };

  const onInputChange = useCallback((event: CustomEvent<string>) => {
    const message = event.detail.trim();
    setMessage(message);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!message.length || message.length > MAX_MESSAGE_LENGTH) {
      return;
    }
  
    try {
      await postMessage(message);
      setResponse({
        text: MESSAGE_SUCCESS_TEXT,
        type: 'success'
      });
    } catch (error) {
      setResponse({
        text: MESSAGE_ERROR_TEXT,
        type: 'error'
      });
    }
  }, [message]);
  

  return (
    <div className="feedbacky-container">
      <FeedbackModal
        open={openDialog}
        onClose={handleDialogVisibility}
        onChange={onInputChange}
        onClick={onSubmit}
        text={response.text}
        type={response.type ?? ''}
      />
      <IconButton
        iconType={IconType.Feedback}
        iconColor={Colors.BrandAccentLight}
        onClick={handleDialogVisibility}
        customStyle={ICON_BUTTON_STYLE}
        width='50px'
        height='50px'
      />
    </div>
  );
}

export default Feedbacky;