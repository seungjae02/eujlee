import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent 
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion'; // Import framer-motion
import './Resources.css';

// Easily add more resources here in the future!
const resourcesData = [
  {
    title: "A \"treat\" to treat your sore throat!",
    description: "Learn how to make a very simple and natural treatment for your sore throat!",
    videoUrl: "https://www.youtube.com/embed/NBovkxuoBeA?rel=0&modestbranding=1"
  }
];

const Resources = () => {
  return (
    <Box className="resources-section" id="resources">
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
              Patient Resources
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              Helpful videos, articles, and guides to support your ongoing wellness and healing journey.
            </Typography>
          </Box>
        </motion.div>

        {/* Resources Grid */}
        <Grid container spacing={4} justifyContent="center">
          {resourcesData.map((resource, index) => (
            <Grid item xs={12} md={6} lg={5} key={index}>
              
              {/* Animated Resource Cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut",
                  delay: index * 0.15 // Staggers the cards as you add more!
                }}
                style={{ height: '100%' }}
              >
                <Card className="resource-card" elevation={0}>
                  
                  {/* Video Container */}
                  <Box className="video-wrapper">
                    <iframe
                      className="video-iframe"
                      src={resource.videoUrl}
                      title={resource.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Box>
                  
                  {/* Text Content Below Video */}
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <PlayCircleOutlineIcon sx={{ color: '#00796b', mr: 1.5, mt: 0.5 }} fontSize="medium" />
                      <Typography variant="h5" sx={{ fontWeight: 700, color: '#2c3e50', lineHeight: 1.3 }}>
                        {resource.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {resource.description}
                    </Typography>
                  </CardContent>

                </Card>
              </motion.div>
              
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Resources;