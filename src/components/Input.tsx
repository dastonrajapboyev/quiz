import React from "react";
import styled from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.5px solid ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  margin: 16px 0;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}22;
  }
`;

const Input: React.FC<InputProps> = (props) => <StyledInput {...props} />;

export default Input;
