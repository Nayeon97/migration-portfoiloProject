import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  btnType: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ name, disabled, onClick, btnType }: ButtonProps) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick} btnType={btnType}>
      {name}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ btnType: string }>`
  width: ${(props) => (props.btnType === 'home' ? '50px' : '100px')};
  height: ${(props) => (props.btnType === 'home' ? '50px' : '40px')};
  background-color: ${(props) => {
    switch (props.btnType) {
      case 'add':
        return '#0a86f7';
      case 'logout':
        return 'white';
      case 'delete':
        return '#e7f5ff';
      default:
        return '#0a86f7';
    }
  }};
  color: ${(props) => {
    switch (props.btnType) {
      case 'logout':
        return '#228be6';
      case 'delete':
        return '#228be6';
      default:
        return 'white';
    }
  }};
  border: none;
  border-radius: ${(props) => (props.btnType === 'home' ? '50%' : '10px')};
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.5;
    color: white;
    background-color: #ced4da;
  }
`;
