import styled from 'styled-components';

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  background-color: pink;
  border-radius: 10px;
  margin-bottom: 10px;
`;
