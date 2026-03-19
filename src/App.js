import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Landing from './sections/Landing';
import About from './sections/About';
import Services from './sections/Services';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#82A192', // Love this sage green color!
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5e7b63',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 18,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '1.7rem',
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline smooths out browser inconsistencies and applies base theme styles */}
      <CssBaseline /> 
      
      <NavBar />
      
      {/* Semantic HTML wrapper for your main content */}
      <main> 
        <section id="home"><Landing /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="resources"><Resources /></section>
        <section id="contact"><Contact /></section>
      </main>
      
    </ThemeProvider>
  );
}

export default App;