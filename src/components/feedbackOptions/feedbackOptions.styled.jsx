import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px #333;
  }
`;

export const FeedbackOptionWrapper = styled.div`
  margin-bottom: 10px;
`;

export const FeedbackOptionButton = styled(Button)`
  background-color: #2196f3;
`;