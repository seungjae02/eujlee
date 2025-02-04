import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import './Services.css'; // Import CSS
import InitialAssessment from "../assets/images/InitialAssessment.webp";
import AssessmentAndTreatment from "../assets/images/AssessmentAndTreatment.webp";
import FollowUp from "../assets/images/FollowUp.webp";
import Facial from "../assets/images/Facial.webp";
import FacialFollowUp from "../assets/images/FacialFollowUp.webp";

const services = [
    { 
        title: 'Initial Assessment', 
        price: '$150/60 min', 
        description: 'Comprehensive evaluation of your health condition.', 
        image: InitialAssessment
    },
    { 
        title: 'Initial Assessment and Treatment', 
        price: '$240/90 min', 
        description: 'Complete assessment with first acupuncture treatment.', 
        image: AssessmentAndTreatment
    },
    { 
        title: 'Follow Up', 
        price: '$150/60 min', 
        description: 'Regular follow-up treatment for ongoing care.', 
        image: FollowUp
    },
    { 
        title: 'Follow Up', 
        price: '$75/60 min', 
        description: 'Continued acupuncture sessions tailored to your needs.', 
        image: FollowUp
    },
    { 
        title: 'Facial Rejuvenation Initial', 
        price: '$270', 
        description: 'First facial rejuvenation acupuncture session.', 
        image: Facial
    },
    { 
        title: 'Facial Rejuvenation Follow Up', 
        price: '$190', 
        description: 'Follow-up session for facial acupuncture.', 
        image: FacialFollowUp
    }
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
