import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion'; // Import framer-motion
import './Contact.css'; 

const Contact = () => {
  return (
    <Box className="contact-section" id="contact">
      <Container maxWidth="lg">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
              Get in Touch
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              We're here to help you on your wellness journey. Reach out with any questions or book your appointment today!
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} alignItems="stretch">
          
          {/* Google Map - Slides in from the left */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ height: '100%' }} // Keeps the map stretched to match the card height
            >
              <Box className="map-wrapper">
                <iframe
                  title="We Nature Balance Location"
                  className="map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1377360977!2d-79.3949167!3d43.707686599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33457bb6e113%3A0x2d823ddb92d13ca3!2sWe%20Nature%20Balance!5e0!3m2!1sen!2sus!4v1770699924051!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Details - Slides in from the right */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Slight delay so it follows the map
              style={{ height: '100%' }}
            >
              <Paper elevation={0} className="contact-card">
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50', mb: 1 }}>
                  Contact Information
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                  Email is preferred for booking appointments. Feel free to reach out for any other inquiries. Our door is always open and we’d love to hear from you.
                </Typography>

                <List disablePadding>
                  {/* Address */}
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                      <LocationOnIcon sx={{ color: '#00796b' }} fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Location"
                      secondary="120 Eglinton Ave E Unit #1001, Toronto, ON, M4P 1E2"
                      primaryTypographyProps={{ fontWeight: 600, color: '#2c3e50' }}
                      secondaryTypographyProps={{ sx: { mt: 0.5, fontSize: '1rem' } }}
                    />
                  </ListItem>

                  {/* Email */}
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                      <EmailIcon sx={{ color: '#00796b' }} fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Email"
                      secondary={<a href="mailto:gracelee.wenature@gmail.com" className="contact-link">gracelee.wenature@gmail.com</a>}
                      primaryTypographyProps={{ fontWeight: 600, color: '#2c3e50' }}
                      secondaryTypographyProps={{ sx: { mt: 0.5, fontSize: '1rem' } }}
                    />
                  </ListItem>

                  {/* Phone */}
                  <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 4 }}>
                    <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                      <PhoneIcon sx={{ color: '#00796b' }} fontSize="medium" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Phone"
                      secondary={<a href="tel:6478231656" className="contact-link">(647) 823-1656</a>}
                      primaryTypographyProps={{ fontWeight: 600, color: '#2c3e50' }}
                      secondaryTypographyProps={{ sx: { mt: 0.5, fontSize: '1rem' } }}
                    />
                  </ListItem>
                </List>
                
                {/* Note: Kept your Button commented out just as you had it! */}

              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;