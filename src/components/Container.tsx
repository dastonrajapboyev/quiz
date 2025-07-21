import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 420px;
  margin: 40px auto;
  padding: 32px 20px;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(108, 99, 255, 0.08);
  text-align: center;
  width: 95%;
  @media (max-width: 600px) {
    padding: 18px 4px;
    max-width: 98vw;
  }
`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
