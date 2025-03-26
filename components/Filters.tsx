"use client";

import { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../app/layout"; // تم را ایمپورت می‌کنیم

const Container = styled.div`
  margin-bottom: 1rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => (theme.darkMode ? "#fff" : "#333")}; 
  text-align: center;
`;

const Select = styled.select`
  width: 200px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => (theme.darkMode ? "#555" : "#e5e7eb")}; 
  border-radius: 0.375rem;
  background-color: ${({ theme }) => (theme.darkMode ? "#333" : "#fff")};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => (theme.darkMode ? "#fff" : "#333")};

  &:hover {
    border-color: #f97316;
    background-color: ${({ theme }) => (theme.darkMode ? "#444" : "#fff7e6")};
  }

  &:focus {
    outline: none;
    border-color: #f97316;
    box-shadow: 0 0 5px rgba(249, 115, 22, 0.5);
  }

  option {
    color: ${({ theme }) => (theme.darkMode ? "#fff" : "#333")};
    background-color: ${({ theme }) => (theme.darkMode ? "#444" : "#fff")};
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({ type: "", diet: "" });
  const { darkMode } = useContext(ThemeContext); // مقدار تم را دریافت کردیم

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <FilterGroup>
        <Label htmlFor="type">نوع غذا</Label>
        <Select id="type" name="type" onChange={handleChange}>
          <option value="">همه</option>
          <option value="main course">غذای اصلی</option>
          <option value="dessert">دسر</option>
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label htmlFor="diet">رژیم غذایی</Label>
        <Select id="diet" name="diet" onChange={handleChange}>
          <option value="">همه</option>
          <option value="vegetarian">گیاه‌خواری</option>
          <option value="vegan">وگان</option>
        </Select>
      </FilterGroup>
    </Container>
  );
}
