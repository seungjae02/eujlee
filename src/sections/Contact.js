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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1377360977!2d-79.3949167!3d43.707686599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33457bb6e113%3A0x2d823ddb92d13ca3!2sWe%20Nature%20Balance!5e0!3m2!1sen!2sus!4v1770699924051!5m2!1sen!2sus"
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
                120 Eglinton Ave E Unit #1001, Toronto, ON, M4P 1E2
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
                (647) 823-1656
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
