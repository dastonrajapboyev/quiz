import React, { createContext, useState } from "react";

type QuizContextType = {
  userName: string;
  setUserName: (name: string) => void;
  category: string;
  setCategory: (cat: string) => void;
  answers: Record<number, string>;
  setAnswers: (ans: Record<number, string>) => void;
};

export const QuizContext = createContext<QuizContextType>({
  userName: "",
  setUserName: () => {},
  category: "",
  setCategory: () => {},
  answers: {},
  setAnswers: () => {},
});

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <QuizContext.Provider
      value={{
        userName,
        setUserName,
        category,
        setCategory,
        answers,
        setAnswers,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
