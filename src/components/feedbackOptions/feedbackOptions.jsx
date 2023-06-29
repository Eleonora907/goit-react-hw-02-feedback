
import React from 'react';
import { Button, FeedbackOptionWrapper } from './feedbackOptions.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionWrapper>
      {options.map(option => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </FeedbackOptionWrapper>
  );
};
