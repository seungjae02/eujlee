import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Contact.css';

const Resources = () => {
  return (
    <Box className="contact-container">
      <Container>
        <Typography variant="h2" color="primary" align="center" gutterBottom>
          Resources
        </Typography>
        {/* Treatments & Followups */}
        <Accordion className="service-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center">
              <Typography variant="h3" className="service-title">Videos</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NBovkxuoBeA?si=Y2uO5h1stpxBzZdw" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Resources;
