"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem; 
  font-weight: bold;
`;

const Message = styled.p`
  color: #6b7280; 
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const Card = styled.div`
  border: 1px solid #e5e7eb; 
  border-radius: 0.375rem; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 10rem; 
  object-fit: cover;
  border-radius: 0.375rem; 
`;

const RecipeTitle = styled.h2`
  font-size: 1.125rem; 
  font-weight: 600; 
  margin-top: 0.5rem; 
`;

const Button = styled.button`
  margin-top: 0.5rem; 
  background-color: #f87171; 
  color: white;
  padding: 0.25rem 1rem; 
  border-radius: 0.375rem; 
`;

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Container>
      <Title>علاقه‌مندی‌ها ❤️</Title>
      {favorites.length === 0 ? (
        <Message>هیچ دستوری ذخیره نشده است</Message>
      ) : (
        <Grid>
          {favorites.map((recipe) => (
            <Card key={recipe.id}>
              <Image src={recipe.image} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <Button onClick={() => removeFavorite(recipe.id)}>حذف ❌</Button>
            </Card>
          ))}
        </Grid>
      )}
    </Container>
  );
}
