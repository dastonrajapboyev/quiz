import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import styled from "styled-components";
import PublicIcon from "@mui/icons-material/Public";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import FunctionsIcon from "@mui/icons-material/Functions";
import MemoryIcon from "@mui/icons-material/Memory";
import BrushIcon from "@mui/icons-material/Brush";

const categories = [
  { name: "Geography", icon: <PublicIcon fontSize="large" /> },
  { name: "Sport", icon: <SportsSoccerIcon fontSize="large" /> },
  { name: "History", icon: <HistoryEduIcon fontSize="large" /> },
  { name: "Mathematics", icon: <FunctionsIcon fontSize="large" /> },
  { name: "Technology", icon: <MemoryIcon fontSize="large" /> },
  { name: "Art", icon: <BrushIcon fontSize="large" /> },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 18px;
  margin: 24px 0 18px 0;
`;

const CategoryCard = styled.button<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 0 14px 0;
  border-radius: 14px;
  border: none;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.card};
  color: ${({ selected, theme }) => (selected ? "#fff" : theme.colors.text)};
  font-weight: 600;
  font-size: 18px;
  box-shadow: 0 2px 12px rgba(108, 99, 255, 0.07);
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.12s;
  outline: ${({ selected, theme }) =>
    selected ? `2.5px solid ${theme.colors.secondary}` : "none"};
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    transform: translateY(-2px) scale(1.03);
  }
`;

const CategoryPage: React.FC = () => {
  const [selected, setSelected] = useState("");
  const { setCategory } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (selected) {
      setCategory(selected);
      navigate("/quiz");
    }
  };

  return (
    <Container>
      <h2 style={{ marginBottom: 8 }}>Select a Category</h2>
      <Grid>
        {categories.map((cat) => (
          <CategoryCard
            key={cat.name}
            selected={selected === cat.name}
            onClick={() => setSelected(cat.name)}>
            {cat.icon}
            <span style={{ marginTop: 10 }}>{cat.name}</span>
          </CategoryCard>
        ))}
      </Grid>
      <Button
        onClick={handleStart}
        disabled={!selected}
        style={{ marginTop: 24 }}>
        Start Quiz
      </Button>
    </Container>
  );
};

export default CategoryPage;
