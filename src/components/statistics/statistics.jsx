import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsWrapper } from './statistics.styled';
import { SectionTitle } from 'components/section/section.styled';

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
      <StatisticsWrapper>
        <SectionTitle>Statistics</SectionTitle>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>Positive Percentage: {positivePercentage}%</StatisticsItem>
      </StatisticsWrapper>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};