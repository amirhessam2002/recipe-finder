'use client';

import { ReactNode, useState, createContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { metadata } from './metadata';
import Navbar from '../components/Navbar';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => (props.theme.darkMode ? '#1f2937' : '#f5f5f5')};
    color: ${(props) => (props.theme.darkMode ? '#f5f5f5' : '#333')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;


const lightTheme = { darkMode: false };
const darkTheme = { darkMode: true };


export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <html lang="fa">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
          </head>
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
