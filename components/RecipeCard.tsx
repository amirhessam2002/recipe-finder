"use client";

import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e5e7eb; 
  border-radius: 0.5rem; 
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  }
`;

const Image = styled.img`
  width: 100%;
  height: 10rem; 
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem; 
`;

const Title = styled.h3`
  font-size: 1.125rem; 
  font-weight: bold;
`;

const Button = styled(Link)`
  margin-top: 0.5rem; 
  display: inline-block;
  background-color: #fb923c; 
  color: white;
  padding: 0.5rem 1rem; 
  border-radius: 0.375rem; 
  text-decoration: none;
  
  &:hover {
    background-color: #f97316; 
  }
`;

export default function RecipeCard({ recipe }) {
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.title} />
      <Content>
        <Title>{recipe.title}</Title>
        <Button href={`/recipe/${recipe.id}`}>جزئیات بیشتر ➡️</Button>
      </Content>
    </Card>
  );
}
