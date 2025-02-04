// src/Landing.js
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

function Landing() {
  return (
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
        <Button variant="contained" color="primary" size="large">
          <strong>Contact Us</strong>
        </Button>
      </Container>
    </Box>
  );
}

export default Landing;
