import React from 'react';
import { Box, Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Services.css'; // Import CSS
import InitialAssessment from "../assets/images/InitialAssessment.webp";
import AssessmentAndTreatment from "../assets/images/AssessmentAndTreatment.webp";
import FollowUp from "../assets/images/FollowUp.webp";
import Facial from "../assets/images/Facial.webp";
import FacialFollowUp from "../assets/images/FacialFollowUp.webp";

const general_services = [
    { 
        title: 'Initial Assessment', 
        price: '$150/60 min', 
        description: 'Comprehensive evaluation of your health condition.', 
    },
    { 
        title: 'Initial Assessment and Treatment', 
        price: '$240/90 min', 
        description: 'Complete assessment with first acupuncture treatment.', 
    },
    { 
        title: 'Follow Up', 
        price: '$150/60 min', 
        description: 'Regular follow-up treatment for ongoing care.', 
    },
    { 
        title: 'Follow Up', 
        price: '$75/60 min', 
        description: 'Continued acupuncture sessions tailored to your needs.', 
    }
];

const facial_services = [
  { 
    title: 'Cosmetic Acupuncture Initial (2 hrs)', 
    price: '$340', 
    description: 'First facial rejuvenation acupuncture session.', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up (1.5 hrs)', 
    price: '$190', 
    description: 'Follow-up session for facial acupuncture.', 
    isPkg: false,
  },
  { 
    title: 'Microneedling', 
    price: '$275', 
    description: 'Microneedling', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (6x)', 
    price: '$1,000', 
    description: 'Follow-up session package for facial acupuncture.', 
    isPkg: true,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (12x)', 
    price: '$2,000', 
    description: 'Follow-up session package for facial acupuncture.', 
    isPkg: true,
  },
  { 
    title: 'Microneedling Package (4x)', 
    price: '$1,000 ($250/treatment)', 
    description: 'Microneedling', 
    isPkg: true,
  },
  { 
    title: 'Microneedling Package (10x)', 
    price: '$2,000 ($200/treatment)', 
    description: 'Microneedling', 
    isPkg: true,
  }
];

const special_services = [
  { 
      title: 'Acne Treatment Package', 
      price: '$1,800', 
      description: 'Acne Treatment Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments', '6 Microneedling Acne Treatments'],
  },
  { 
      title: 'Hair Regrowth Package', 
      price: '$3,600', 
      description: 'Hair Regrowth Package', 
      services_included: ['24 Cosmetic Acupuncture Treatments', '8 Scalp Microneedling Treatments'],
  },
  { 
      title: 'Face Lift & Wrinkle Package', 
      price: '$2,200', 
      description: 'Face Lift & Wrinkle Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments', '6 Microneedling Lift Treatments'],
  }
];

const Services = () => {
  return (
    <Box className="services-container">
      <Container>
        <Typography variant="h2" className="services-title" gutterBottom>
          Our Services
        </Typography>
        {/* Treatments & Followups */}
        <Accordion className="service-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center">
              <Box className="service-image-container">
                  <img src={AssessmentAndTreatment} alt="Treatment" className="service-image" />
                </Box>
              <Typography variant="h3" className="service-title">General Assessments & Treatments</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {general_services.map((service, index) => (
              <Paper key={index} className="service-card" elevation={3}>
                <Box className="service-content">
                  <Typography variant="h3" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                </Box>
                <Box className="service-price">
                  <Typography variant="body1">{service.price}</Typography>
                </Box>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>

        {/* Facial Services Dropdown with Image */}
        <Accordion className="service-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center">
                <Box className="service-image-container">
                  <img src={Facial} alt='Facial' className="service-image" />
                </Box>
              <Typography variant="h3" className="service-title">Facial Rejuvenation Services</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h3" className="sub-services-title" gutterBottom>
              Single Treatments
            </Typography>
            {facial_services.map((service, index) => !service.isPkg ? (
              <Paper key={index} className="service-card" elevation={3}>
                <Box className="service-content">
                  <Typography variant="h3" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                </Box>
                <Box className="service-price">
                  <Typography variant="body1">{service.price}</Typography>
                </Box>
              </Paper>
            ) : "")}

            <Typography variant="h3" className="sub-services-title" gutterBottom>
              Packages & Bundles
            </Typography>
            {facial_services.map((service, index) => service.isPkg ? (
              <Paper key={index} className="service-card" elevation={3}>
                <Box className="service-content">
                  <Typography variant="h3" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                </Box>
                <Box className="service-price">
                  <Typography variant="body1">{service.price}</Typography>
                </Box>
              </Paper>
            ) : "")}
          </AccordionDetails>
        </Accordion>

        {/* Specials */}
        <Accordion className="service-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center">
              <Box className="service-image-container">
                <img src={AssessmentAndTreatment} alt='Facial' className="service-image" />
              </Box>
              <Typography variant="h3" className="service-title">Special Packages</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {special_services.map((service, index) => (
              <Paper key={index} className="service-card" elevation={3}>
                <Box className="service-content">
                  <Typography variant="h3" className="service-title">
                    {service.title}
                  </Typography>
                  <Typography variant="body1" className="service-description">
                    {service.description}
                  </Typography>
                  <Typography variant="body1" className="includes-title">
                    Includes:
                  </Typography>
                  {service.services_included.map((included, index) => (
                    <li>{included}</li>
                  ))}
                </Box>
                <Box className="service-price">
                  <Typography variant="body1">{service.price}</Typography>
                </Box>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Services;
