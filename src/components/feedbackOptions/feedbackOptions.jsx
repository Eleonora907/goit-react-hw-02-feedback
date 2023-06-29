import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FeedbackOptionWrapper } from './feedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <FeedbackOptionWrapper>
        <Button onClick={() => onLeaveFeedback('good')}>Good</Button>
        <Button onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
        <Button onClick={() => onLeaveFeedback('bad')}>Bad</Button>
      </FeedbackOptionWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
