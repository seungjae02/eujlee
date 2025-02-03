// src/App.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import test from "./assets/images/logo-transparent-png.png";

function App() {
  return (
    <div>
      {/* Header Section */}
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box component="img" 
            src={test} 
            sx={{ height: 120, marginRight: 2 }} 
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            WE NATURE BALANCE
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">SERVICES</Button>
          <Button color="inherit">RESOURCES</Button>
          <Button color="inherit">CONTACT</Button>
          <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
            BOOK NOW
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/1600x900/?spa)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Revitalize Your Beauty with Aesthetic Excellence
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Schedule an Appointment
          </Button>
        </Container>
      </Box>
    </div>
  );
}

export default App;
