import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  countTotalFeedback() {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.props;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.props;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};