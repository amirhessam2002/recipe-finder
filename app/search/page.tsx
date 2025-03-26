"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "@/components/RecipeCard";
import Filters from "@/components/Filters";
import styled from "styled-components";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

const Container = styled.div`
  padding: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e5e7eb;
  margin: 0 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #d1d5db;
  }
`;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [recipes, setRecipes] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            query,
            number: 9,
            offset: (page - 1) * 9,
            type: filters.type || "",
            diet: filters.diet || "",
            apiKey: API_KEY,
          },
        })
        .then((res) => setRecipes(res.data.results))
        .catch((err) => console.error(err));
    }
  }, [query, filters, page]);

  return (
    <Container>
      <Filters onFilterChange={setFilters} />
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
      <Pagination>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          قبلی
        </Button>
        <Button onClick={() => setPage(page + 1)}>بعدی</Button>
      </Pagination>
    </Container>
  );
}
