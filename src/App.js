import React from 'react';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Landing from './sections/Landing';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Resources from './sections/Resources'
import './App.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#82A192',
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
    aboutText: {
      fontSize: '1.2rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <section id="home"><Landing /></section>
      <section id="about"><About /></section>
      {/* <section id="services"><Services /></section> */}
      <section id='resources'><Resources/></section>
      <section id="contact"><Contact /></section>
    </ThemeProvider>
  );
}

export default App;
