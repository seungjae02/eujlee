// src/sections/About.js
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import office from "../assets/images/office.jpg";


const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" color="textPrimary" paragraph>
              We Nature Balance is dedicated to providing professional acupuncture treatments
              that promote holistic well-being. Our approach addresses various health conditions,
              including insomnia, anxiety, pain, and more. With a commitment to natural healing, 
              we strive to restore balance and vitality in every client.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={office}
              alt="About Us"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
