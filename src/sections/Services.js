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
        description: 'A comprehensive evaluation of your body’s condition, lifestyle, and health goals. Includes physical examination, disease diagnosis, and health coaching for self-care (changing your lifestyle, recommendations for further assessment, and treatment procedures).', 
    },
    { 
        title: 'Online Health Consultation & Coaching (30 mins)', 
        price: '$75 (+$30/addtional 15 mins)', 
        description: 'A comprehensive evaluation of your body’s condition, lifestyle, and health goals. Includes disease diagnosis, and health coaching for self-care (changing your lifestyle, recommendations for further assessment, and treatment procedures). Online meeting at your convenient place. Ideal for a person who has a tight schedule', 
    },
    {  
        title: 'Initial Assessment and Treatment (120 mins)', 
        price: '$250', 
        description: 'A comprehensive evaluation of your body’s condition, lifestyle, and health goals. Physical exams. Health coaching for self-care to improve the treatment’s effects and change your lifestyle. First acupuncture treatment and/or other modality treatment which is best suitable for your health condition.', 
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
    price: '$300', 
    description: 'First facial rejuvenation acupuncture session. Includes personalized health assessment and body acupuncture treatment, which is customized based on your fundamental body condition to enhance the facial rejuvenation treatment effect. Additional facial Gua Sha/ Cupping.', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up (90 mins)', 
    price: '$190', 
    description: 'Regular follow-up assessment and facial acupuncture treatment for ongoing care. Additional facial Gua Sha/ Cupping. Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.', 
    isPkg: false,
  },
  { 
    title: 'Microneedling (90 mins)', 
    price: '$275', 
    description: 'Facial rejuvenation micro-needling treatment. Accompanied by body acupuncture treatment based on your fundamental body condition to enhance the facial treatment effect. The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect. Recommended as an adjunct to cosmetic acupuncture treatment ', 
    isPkg: false,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (6x 90 min treatments)', 
    price: '$1,000', 
    description: '6 times follow-up session package for facial acupuncture after the initial facial rejuvenation acupuncture session (Initial facial rejuvenation session is not included in this package). Additional facial Gua Sha/ Cupping. Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.', 
    isPkg: true,
  },
  { 
    title: 'Cosmetic Acupuncture Follow Up Package (12x 90 min treatments)', 
    price: '$1,900', 
    description: '12 times follow-up session package for facial acupuncture after the initial facial rejuvenation acupuncture session (Initial facial rejuvenation session is not included in this package). Additional facial Gua Sha/ Cupping. Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.', 
    isPkg: true,
  },
  { 
    title: 'Microneedling Package (4x 90 min treatments)', 
    price: '$1,000', 
    description: '4 times regular (once per month) micro-needling package. The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect. Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.', 
    isPkg: true,
  },
  { 
    title: 'Trial Package', 
    price: '$2,000', 
    services_included: ['8 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value)',
                        'Additional facial Gua Sha/ Cupping.',
                        '2 Microneedling Treatments ($275 value per session).',
                        'The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect.',
                        'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.'
                       ],
    isPkg: true,
  },
  { 
    title: '4-month Makeover Package', 
    price: '$3,100', 
    services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value).',
                        'Additional facial Gua Sha/ Cupping',
                        '4 Microneedling Treatments ($275 value per session)',
                        'The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect.',
                        'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.'
                       ],
    isPkg: true,
  },
  { 
    title: 'Ultimate Package', 
    price: '$4,200', 
    services_included: ['16 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value)',
                        'Additional facial Gua Sha/ Cupping',
                        '6 Microneedling Treatments ($275 value per session)',
                        'The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect.',
                        'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.'
                       ],
    isPkg: true,
  }
];

const special_services = [
  { 
      title: 'Acne Treatment Package', 
      price: '$2,500', 
      description: 'Acne Treatment Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value)',
                          '4 Microneedling Treatments ($275 value per session).',
                          'The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the acne treatment effect.',
                          'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the acne treatment effect.',
                        ],
  },
  { 
      title: 'Hair Regrowth Package', 
      price: '$5,400', 
      description: 'Hair Regrowth Package', 
      services_included: ['24 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value)',
                          '8 Microneedling Treatments ($275 value per session).',
                          'The customized scalp paste of natural herbal ingredients is used for microneedling sessions to promote the hair regrowth treatment effect.',
                          'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the hair regrowth treatment effect.',
                         ],
  },
  { 
      title: 'Face Lift & Wrinkle Package', 
      price: '$3,500', 
      description: 'Face Lift & Wrinkle Package', 
      services_included: ['12 Cosmetic Acupuncture Treatments (Including initial 120 min assessment & treatment session - $300 value)',
                          'Additional facial Gua Sha/ Cupping.',
                          '6 Microneedling Treatments ($275 value per session).',
                          'The customized facial paste of natural herbal ingredients is used for microneedling sessions to promote the facial rejuvenation treatment effect.',
                          'Each session includes accompanied body acupuncture treatment based on your fundamental body condition to enhance the facial rejuvenation treatment effect.'
                         ],
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
