import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import WelcomePage from "./pages/WelcomePage";
import CategoryPage from "./pages/CategoryPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App: React.FC = () => (
  <QuizProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QuizProvider>
);

export default App;
