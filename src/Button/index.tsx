// components/button/index.tsx
import React, { CSSProperties, ReactNode } from 'react';
import { ButtonContainer } from './styles';

interface CustomButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  type = 'button',
  style,
  disabled,
  className,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      type={type}
      style={style}
      disabled={disabled}
      className={`${className || ''} ${disabled ? 'disabled' : ''}`}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
