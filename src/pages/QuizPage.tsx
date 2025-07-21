import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import Container from "../components/Container";
import Button from "../components/Button";
import Option from "../components/Option";
import quizData from "../data";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProgressBar = styled.div<{ percent: number }>`
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.colors.muted}22;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ percent }) => percent}%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    border-radius: 8px;
    transition: width 0.3s;
  }
`;

const QuizPage: React.FC = () => {
  const { category, setAnswers, answers } = useContext(QuizContext);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!category) {
    navigate("/categories");
    return null;
  }

  const questions = quizData[category] || [];
  const question = questions[current];
  const percent = Math.round(((current + 1) / questions.length) * 100);

  const handleNext = () => {
    if (selected !== null) {
      setAnswers({ ...answers, [current]: selected });
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(answers[current + 1] || null);
      } else {
        navigate("/result");
      }
    }
  };

  if (!question) return <Container>No questions found.</Container>;

  return (
    <Container>
      <ProgressBar percent={percent} />
      <h3 style={{ margin: "0 0 10px 0", fontWeight: 600 }}>
        Question {current + 1} of {questions.length}
      </h3>
      <p style={{ fontSize: 18, fontWeight: 500, marginBottom: 18 }}>
        {question.question}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt: string) => (
          <Option
            key={opt}
            text={opt}
            selected={selected === opt}
            onClick={() => setSelected(opt)}
          />
        ))}
      </div>
      <Button
        onClick={handleNext}
        disabled={selected === null}
        style={{ marginTop: 24 }}>
        {current === questions.length - 1 ? "Submit" : "Next"}
      </Button>
    </Container>
  );
};

export default QuizPage;
