import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import Container from "../components/Container";
import quizData from "../data";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Confetti = styled.div`
  width: 100%;
  height: 60px;
  background: repeating-linear-gradient(
    90deg,
    #6c63ff,
    #00bfa6 20px,
    #f8f9fb 40px
  );
  border-radius: 12px 12px 0 0;
  margin-bottom: 18px;
  animation: confetti 1.2s linear;
  @keyframes confetti {
    0% {
      opacity: 0;
      transform: scaleY(0.2);
    }
    60% {
      opacity: 1;
      transform: scaleY(1.1);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
`;

const WrongList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const WrongItem = styled.li`
  margin-bottom: 18px;
  background: #fff5f5;
  border-left: 4px solid ${({ theme }) => theme.colors.wrong};
  padding: 10px 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.wrong};
`;
const Correct = styled.span`
  color: ${({ theme }) => theme.colors.correct};
  font-weight: 600;
`;
const Wrong = styled.span`
  color: ${({ theme }) => theme.colors.wrong};
  font-weight: 600;
`;

const ResultPage: React.FC = () => {
  const { category, answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  if (!category) {
    navigate("/categories");
    return null;
  }
  const questions = quizData[category] || [];
  let correct = 0;
  const wrongs: { q: string; your: string; correct: string }[] = [];
  questions.forEach((q: any, i: number) => {
    if (answers[i] === q.answer) correct++;
    else wrongs.push({ q: q.question, your: answers[i], correct: q.answer });
  });
  const handleRestart = () => {
    setAnswers({});
    navigate("/");
  };
  return (
    <Container>
      {correct >= Math.ceil(questions.length * 0.7) && <Confetti />}
      <h2 style={{ marginBottom: 8 }}>Result</h2>
      <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 18 }}>
        Your score: <Correct>{correct}</Correct> / {questions.length}
      </p>
      {wrongs.length > 0 && (
        <div>
          <h4 style={{ color: "#F44336", marginBottom: 8 }}>
            Incorrect Answers:
          </h4>
          <WrongList>
            {wrongs.map((w, i) => (
              <WrongItem key={i}>
                <b>Q:</b> {w.q}
                <br />
                <b>Your answer:</b> <Wrong>{w.your || "No answer"}</Wrong>
                <br />
                <b>Correct answer:</b> <Correct>{w.correct}</Correct>
              </WrongItem>
            ))}
          </WrongList>
        </div>
      )}
      <Button onClick={handleRestart} style={{ marginTop: 24 }}>
        Restart
      </Button>
    </Container>
  );
};

export default ResultPage;
