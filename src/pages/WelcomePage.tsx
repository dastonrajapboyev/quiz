import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import Input from "../components/Input";

const WelcomePage: React.FC = () => {
  const [name, setName] = useState("");
  const { setUserName } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      setUserName(name);
      navigate("/categories");
    }
  };

  return (
    <Container>
      <h1>Welcome to the Quiz App!</h1>
      <Input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleStart}>Start</Button>
    </Container>
  );
};

export default WelcomePage;
