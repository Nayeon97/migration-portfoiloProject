import styled from 'styled-components';

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.div`
  width: 250px;
  height: 350px;
  background-color: pink;
  border-radius: 10px;
`;
