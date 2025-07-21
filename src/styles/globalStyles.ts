import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${() => theme.colors.background};
    font-family: ${() => theme.font};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: ${() => theme.colors.text};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
