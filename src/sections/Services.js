import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Chip, 
  Divider, 
  List, 
  ListItem, 
  Button,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SpaIcon from '@mui/icons-material/Spa';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { motion } from 'framer-motion'; // Import framer-motion
import { servicesData } from './servicesData'; 

export default function Services() {
  // Keep the scroll function for your "Book Appointment" buttons
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper function to assign icons based on category name
  const getCategoryIcon = (categoryName) => {
    if (categoryName.includes('Facial')) return <SpaIcon sx={{ mr: 1, color: '#00796b' }} fontSize="large" />;
    return <MedicalServicesIcon sx={{ mr: 1, color: '#1976d2' }} fontSize="large" />;
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Page Header - Fades down gently */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ fontWeight: 800, color: '#2c3e50', letterSpacing: '-0.02em' }}
            >
              Acupuncture & Wellness Services
            </Typography>
            <Typography variant="h6" sx={{ color: '#7f8c8d', maxWidth: '600px', mx: 'auto' }}>
              Personalized, holistic treatments designed to restore balance, enhance your natural vitality, and support your healing journey.
            </Typography>
          </Box>
        </motion.div>

        {servicesData.map((categoryData, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            
            {/* Category Header - Slides in from the left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 4, 
                  p: 2, 
                  borderRadius: 2,
                  background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(244,247,246,0) 100%)',
                  borderLeft: `6px solid ${index === 0 ? '#1976d2' : '#00796b'}`
                }}
              >
                {getCategoryIcon(categoryData.category)}
                <Typography variant="h4" sx={{ color: '#34495e', fontWeight: 700 }}>
                  {categoryData.category}
                </Typography>
              </Box>
            </motion.div>

            {/* Services Grid */}
            <Grid container spacing={4}>
              {categoryData.items.map((service, serviceIndex) => (
                <Grid item xs={12} md={6} key={serviceIndex}>
                  {/* Service Cards - Fade up with a staggered delay based on their index */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeOut",
                      delay: serviceIndex * 0.15 // This creates the "waterfall" stagger effect!
                    }}
                    style={{ height: '100%' }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        borderRadius: 4,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                        }
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1, p: 4 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#2c3e50' }}>
                          {service.title}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3, mt: 2 }}>
                          <Chip 
                            icon={<AccessTimeIcon fontSize="small" />} 
                            label={service.duration} 
                            sx={{ backgroundColor: '#e3f2fd', color: '#1565c0', fontWeight: 600 }}
                          />
                          <Chip 
                            icon={<AttachMoneyIcon fontSize="small" />} 
                            label={service.price} 
                            sx={{ backgroundColor: '#e8f5e9', color: '#2e7d32', fontWeight: 600 }}
                          />
                        </Box>
                        
                        <Divider sx={{ mb: 2, opacity: 0.6 }} />
                        
                        <List disablePadding>
                          {service.description.map((descItem, i) => (
                            <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                              <Typography sx={{ color: '#546e7a', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                <Box component="span" sx={{ color: index === 0 ? '#1976d2' : '#00796b', mr: 1 }}>✦</Box>
                                {descItem}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                      
                      <CardActions sx={{ p: 4, pt: 0 }}>
                        <Button 
                          variant={service.price === "$0.00" ? "outlined" : "contained"} 
                          fullWidth 
                          size="large"
                          startIcon={<EventAvailableIcon />}
                          onClick={() => handleScrollToSection("contact")}
                          sx={{ 
                            borderRadius: 2, 
                            textTransform: 'none', 
                            fontWeight: 600,
                            backgroundColor: service.price === "$0.00" ? 'transparent' : (index === 0 ? '#1976d2' : '#00796b'),
                            color: service.price === "$0.00" ? (index === 0 ? '#1976d2' : '#00796b') : '#fff',
                            borderColor: index === 0 ? '#1976d2' : '#00796b',
                            '&:hover': {
                              backgroundColor: service.price === "$0.00" ? 'rgba(0,0,0,0.04)' : (index === 0 ? '#1565c0' : '#004d40')
                            }
                          }}
                        >
                          {service.price === "$0.00" ? "Book Free Consult" : "Book Appointment"}
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}