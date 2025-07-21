import React from "react";
import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const StyledButton = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>`
  padding: 12px 28px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  margin: 6px 0;
  box-shadow: 0 2px 8px rgba(108, 99, 255, 0.08);
  transition: background 0.2s, transform 0.1s;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px) scale(1.03);
  }
  &:active:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(0.98);
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
