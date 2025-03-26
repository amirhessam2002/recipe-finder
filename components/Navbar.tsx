import Link from "next/link";
import styled from "styled-components";
import ThemeSwitcher from "./ThemeSwitcher"; 

const Nav = styled.nav`
  background-color:rgba(249, 115, 6, 0.86); 
  color: white;
  padding: 1rem; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 1rem; 
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem; 
  font-weight: bold;
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <StyledLink href="/">🍽️ Recipe Finder</StyledLink>
      <LinksContainer>
        <StyledLink href="/">خانه</StyledLink>
        <StyledLink href="/favorites">علاقه‌مندی‌ها</StyledLink>
        <ThemeSwitcher /> {}
      </LinksContainer>
    </Nav>
  );
}
