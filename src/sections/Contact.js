import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import './Contact.css';

const Contact = () => {
  return (
    <Box className="contact-container">
      <Container>
        <Typography variant="h2" color="primary" align="center" gutterBottom>
          <strong>Contact Us</strong> and Book Now!
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Google Map (Left Side) */}
          <Grid item xs={12} md={6} className="map-container">
            <Box className="map-box">
              <iframe
                title="Google Map"
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5256163165554!2d-79.39508692334815!3d43.707246449803755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b332db6c9d9ff%3A0x7958be84eaa5d0e1!2s120%20Eglinton%20Ave%20E%2C%20Toronto%2C%20ON%20M4P%201E2!5e0!3m2!1sen!2sca!4v1671924811773!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Grid>

          {/* Contact Details (Right Side) */}
          <Grid item xs={12} md={6} className="contact-details">
            <Paper elevation={3} className="contact-paper">
              <Typography variant="h4" color="secondary" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body" color="textPrimary" paragraph>
                Feel free to reach out for any inquiries or to book an appointment. We’d love to hear from you!
              </Typography>

              <Typography variant="subtitle1" color="primary" fontWeight="bold">
                📍 Address:
              </Typography>
              <Typography variant="body2" color="textPrimary" paragraph>
                120 Eglinton Ave E, 10th Floor, #1006, Toronto, ON, M4P 1E2
              </Typography>

              <Typography variant="subtitle1" color="primary" fontWeight="bold">
                📧 Email:
              </Typography>
              <Typography variant="body2" color="textPrimary" paragraph>
                gracelee.wenature@gmail.com
              </Typography>

              <Typography variant="subtitle1" color="primary" fontWeight="bold">
                📞 Phone:
              </Typography>
              <Typography variant="body2" color="textPrimary">
                (437) 455-4343
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
