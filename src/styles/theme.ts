import "styled-components";

export const theme = {
  colors: {
    primary: "#6C63FF",
    secondary: "#00BFA6",
    background: "#F8F9FB",
    card: "#fff",
    text: "#222",
    muted: "#888",
    correct: "#4CAF50",
    wrong: "#F44336",
  },
  font: "Poppins, Inter, Arial, sans-serif",
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    font: string;
  }
}
