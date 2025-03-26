"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { ThemeContext } from "../app/layout"; // Importing ThemeContext

const Container = styled.div<{ darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-image: ${(props) =>
    props.darkMode ? "url('/background-dark.jpg')" : "url('/background-light.jpg')"};
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 28rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: #fb923c;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  box-sizing: border-box;
`;

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { darkMode } = useContext(ThemeContext); // Accessing the current theme mode

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <Container darkMode={darkMode}>
      <Title>🥗 جستجوی دستور غذا</Title>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder=" مواد اولیه یا نام غذا را وارد کنید "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">جستجو</Button>
      </Form>
    </Container>
  );
}
