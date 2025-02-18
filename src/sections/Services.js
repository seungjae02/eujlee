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
        title: 'Initial Assessment (60 mins)', 
        price: '$150', 
        description: 'A comprehensive evaluation of your body’s condition, lifestyle, and health goals. Includes physical examination and health coaching for self-care to improve the treatment’s effects and change your lifestyle.', 
    },
    {  
        title: 'Initial Assessment and Treatment (90 mins)', 
        price: '$250', 
        description: 'Includes everything in "Initial Assessment", followed by an acupuncture treatment and/or other modality treatment which is best suitable for your health condition.', 
    },
    { 
        title: 'Follow Up', 
        price: '$150/60 min', 
        description: 'Regular follow-up assessment and treatment for ongoing care.', 
    },
];

const facial_services = [
  { 
    title: 'Cosmetic Acupuncture Initial (120 mins)', 
    price: '$340', 
    description: 'First facial rejuvenation acupuncture session. Included personalized health assessment and the first acupuncture treatment', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up (90 mins)', 
    price: '$190', 
    description: 'Regular follow-up assessment and facial acupuncture treatment for ongoing care', 
    isPkg: false,
  },
  { 
    title: 'Microneedling (90 mins)', 
    price: '$275', 
    description: 'Facial rejuvenation micro-needling treatment. Recommended as an adjunction to cosmetic acupuncture treatment.', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (6x 90 min treatments)', 
    price: '$1,000', 
    description: '6 times follow-up session package for facial acupuncture after the initial facial rejuvenation acupuncture session (Initial facial rejuvenation session is not included in this package).', 
    isPkg: true,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (12x 90 min treatments)', 
    price: '$1,900', 
    description: '12 times follow-up session package for facial acupuncture after the initial facial rejuvenation acupuncture session (Initial facial rejuvenation session is not included in this package).', 
    isPkg: true,
  },
  { 
    title: 'Microneedling Package (4x 90 min treatments)', 
    price: '$1,000', 
    description: '4 times regular (once per month) micro-needling package.', 
    isPkg: true,
  },
  { 
    title: 'Trial Package', 
    price: '$2,400', 
    services_included: ['8 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '2 Microneedling Treatments ($270 value per session).', '120 min for the initial session plus 90 min for follow-up sessions.'],
    isPkg: true,
  },
  { 
    title: '4-month Makeover Package', 
    price: '$2,800', 
    services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '4 Microneedling Treatments.', '120 min for the initial session plus 90 min for follow-up sessions.'],
    isPkg: true,
  },
  { 
    title: 'Ultimate Package', 
    price: '$4,000', 
    services_included: ['16 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '6 Microneedling Treatments.', '120 min for the initial session plus 90 min for follow-up sessions.'],
    isPkg: true,
  }
];

const special_services = [
  { 
      title: 'Acne Treatment Package', 
      price: '$2,200', 
      description: 'Acne Treatment Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '4 Microneedling Treatments', '120 min for the initial session plus 90 min for follow-up sessions.'],
  },
  { 
      title: 'Hair Regrowth Package', 
      price: '$4,600', 
      description: 'Hair Regrowth Package', 
      services_included: ['24 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '8 Scalp Microneedling Treatments.', '6 Free scalp laser treatment.', '120 min for the initial session plus 90 min for follow-up sessions.'],
  },
  { 
      title: 'Face Lift & Wrinkle Package', 
      price: '$2,800', 
      description: 'Face Lift & Wrinkle Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $340 value).', '4 Microneedling Treatments.', '120 min for the initial session plus 90 min for follow-up sessions.'],
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
                  {
                    service.description ? 
                      (<Typography variant="body1" className="service-description">
                        {service.description}
                      </Typography>) : ""
                  }
                  {console.log(service.services_included)}
                  {
                    service.services_included ?
                    (service.services_included.map((included, index) => (
                      <li>{included}</li>
                    ))) : ""
                  }
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
