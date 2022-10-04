import styled from 'styled-components';

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.div`
  width: 300px;
  height: 100px;
  background-color: #f1f3f5;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: center;
`;
