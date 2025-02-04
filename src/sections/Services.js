import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import './Services.css'; // Import CSS

const services = [
  { 
    title: 'Acupuncture Therapy', 
    price: '$80/session', 
    description: 'Address insomnia, anxiety, pain, and more.', 
    image: 'https://www.shutterstock.com/image-photo/bowl-acupuncture-needles-on-wooden-600nw-2138294175.jpg' 
  },
  { 
    title: 'Facial Rejuvenation', 
    price: '$120/session', 
    description: 'Improve aging naturally through targeted treatments.', 
    image: 'https://www.shutterstock.com/image-photo/bowl-acupuncture-needles-on-wooden-600nw-2138294175.jpg' 
  },
  { 
    title: 'Pain Management', 
    price: '$90/session', 
    description: 'Relieve chronic pain and promote physical wellness.', 
    image: 'https://www.shutterstock.com/image-photo/bowl-acupuncture-needles-on-wooden-600nw-2138294175.jpg' 
  },
  { 
    title: 'Weight Management', 
    price: '$100/session', 
    description: 'Support weight control with holistic methods.', 
    image: 'https://www.shutterstock.com/image-photo/bowl-acupuncture-needles-on-wooden-600nw-2138294175.jpg' 
  },
  { 
    title: 'Skin Care', 
    price: '$70/session', 
    description: 'Treat skin issues like acne, eczema, and more.', 
    image: 'https://www.shutterstock.com/image-photo/bowl-acupuncture-needles-on-wooden-600nw-2138294175.jpg' 
  },
];

const Services = () => {
  return (
    <Box className="services-container">
      <Container>
        <Typography variant="h2" className="services-title" gutterBottom>
          Our Services
        </Typography>
        <Box>
          {services.map((service, index) => (
            <Paper key={index} className="service-card" elevation={3}>
              {/* Image Section */}
              <Box className="service-image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </Box>
              {/* Content Section */}
              <Box className="service-content">
                <Typography variant="h3" className="service-title">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="service-description">
                  {service.description}
                </Typography>
              </Box>
              {/* Price Section */}
              <Box className="service-price">
                <Typography variant="body1">{service.price}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
