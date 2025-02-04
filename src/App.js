import React from 'react';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Landing from './sections/Landing';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
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
      fontSize: '1.35rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
