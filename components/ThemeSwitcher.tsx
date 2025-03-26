"use client";

import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../app/layout"; 

const Button = styled.button`
  background-color: #4b5563;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #374151;
    transform: scale(1.05);
  }
`;

export default function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useContext(ThemeContext); 

  return (
    <Button onClick={toggleTheme}>
      {darkMode ? "☀️ تم روشن" : "🌙 تم تاریک"}
    </Button>
  );
}
