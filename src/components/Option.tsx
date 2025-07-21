import React from "react";
import styled from "styled-components";

type OptionProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

const StyledOption = styled.div<{ selected: boolean }>`
  padding: 12px 18px;
  border-radius: 10px;
  border: ${({ selected, theme }) =>
    selected
      ? `2.5px solid ${theme.colors.primary}`
      : `1.5px solid ${theme.colors.muted}`};
  background: ${({ selected, theme }) =>
    selected ? `${theme.colors.primary}11` : theme.colors.card};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  cursor: pointer;
  margin: 6px 0;
  transition: all 0.18s;
  box-shadow: ${({ selected }) => (selected ? "0 2px 8px #6C63FF22" : "none")};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.secondary}11;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Option: React.FC<OptionProps> = ({ text, selected, onClick }) => (
  <StyledOption selected={selected} onClick={onClick}>
    {text}
  </StyledOption>
);

export default Option;
