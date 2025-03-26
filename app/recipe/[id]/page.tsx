"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import styled from "styled-components";

const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
`;

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 0.375rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  background-color: #fb923c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  margin: 1rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
`;

const StepList = styled.ol`
  list-style-type: decimal;
  padding-left: 1.25rem;
`;

const ErrorMessage = styled.p`
  color: #f87171;
  margin-top: 1rem;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.125rem;
  margin-top: 1rem;
`;

export default function RecipeDetail() {
  const params = useParams();
  const id = params.id as string;
  const [recipe, setRecipe] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      .then((res) => {
        setRecipe(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipe:", err);
        setLoading(false);
      });
  }, [id]);

  const addToFavorites = () => {
    if (!recipe) return;
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!storedFavorites.some((item: any) => item.id === recipe.id)) {
      storedFavorites.push({ id: recipe.id, title: recipe.title, image: recipe.image });
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
    }
  };

  if (loading) return <LoadingMessage>در حال بارگذاری...</LoadingMessage>;
  if (!recipe) return <ErrorMessage>خطایی رخ داده است.</ErrorMessage>;

  return (
    <Container>
      <Title>{recipe.title}</Title>

      <CenteredWrapper>
        <Image src={recipe.image} alt={recipe.title} />
        <Button onClick={addToFavorites}>افزودن به علاقه‌مندی‌ها ❤️</Button>
      </CenteredWrapper>

      <Subtitle>مواد اولیه:</Subtitle>
      <List>
        {recipe.extendedIngredients.map((item: any) => (
          <li key={item.id}>{item.original}</li>
        ))}
      </List>

      <Subtitle>مراحل تهیه:</Subtitle>
      <StepList>
        {recipe.analyzedInstructions.length > 0 ? (
          recipe.analyzedInstructions[0].steps.map((step: any) => (
            <li key={step.number}>{step.step}</li>
          ))
        ) : (
          <p>مراحل تهیه‌ای برای این دستور غذا یافت نشد.</p>
        )}
      </StepList>
    </Container>
  );
}
