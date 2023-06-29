import { StatisticsWrapper } from './statistics.styled';

export const Statistics = ({ feedback, total, positivePercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <StatisticsWrapper>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </StatisticsWrapper>
  );
};
