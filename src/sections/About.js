// src/sections/About.js
import { Box, Typography, Container, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import './About.css'; 
import office2 from "../assets/images/office2.jpg";
import portrait from "../assets/images/portrait.jpg";

const About = () => {
  // Reusable animation settings so we don't repeat code
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Box className="about-section">
      <Container maxWidth="lg">
        
        {/* Section 1: Clinic Intro */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <motion.div {...slideLeft}>
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                About We Nature Balance
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Welcome to We Nature Balance, your pathway to a healthier, more active lifestyle. We provide specialized acupuncture treatments tailored to address a wide variety of health conditions.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Our focus areas include: <strong>musculoskeletal issues, chronic pain, insomnia, headaches, menstrual irregularities, IVF support, menopausal symptoms, oncology support, digestive issues, depression, anxiety, and hair loss.</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We also offer <strong>facial rejuvenation acupuncture</strong>—a natural, root-cause approach to graceful aging and skin vitality.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div {...slideRight} className="about-image-container">
              <img src={office2} alt="We Nature Balance Clinic" className="about-image" />
            </motion.div>
          </Grid>
        </Grid>

        {/* Section 2: Mission Statement */}
        <Box sx={{ textAlign: 'center', mb: 10, px: { xs: 2, md: 10 } }}>
          <motion.div {...fadeUp}>
            <Typography variant="h4" color="text.primary" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 500 }}>
              "Our mission is to empower our community to move, live, and age healthily through expert clinical care."
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              We provide a service of excellence and results-oriented care. Whatever your health journey may be, our goal is to ensure that your life is a better one.
            </Typography>
          </motion.div>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* Section 3: Meet the Expert */}
        <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid item xs={12} md={7}>
            <motion.div {...slideLeft}>
              <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                Meet the Expert
              </Typography>
              <Typography variant="h5" color="text.primary" gutterBottom sx={{ mb: 3 }}>
                Dr. Grace Lee, Registered Acupuncturist
              </Typography>
              
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                I am a Registered Acupuncturist in <strong>Canada</strong> and the <strong>USA</strong>, specializing in pain management. Prior to my practice here, I served as a medical doctor for 17 years in Seoul, South Korea. Drawing from my extensive background in traditional Chinese medicine and naturopathic principles, I provide holistic health coaching and customized treatments.
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                Using modalities like <strong>acupuncture, cupping, moxibustion, and Tui Na massage</strong>, I help patients manage pain naturally, reducing their reliance on painkillers to sleep and function.
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                <strong>Our Approach:</strong> We start by deeply understanding your body’s condition, lifestyle, and goals. Together, we create a proactive healthcare plan emphasizing self-care to maintain your treatment's effects. Whether you need recovery from illness, restoration of yin-yang balance, or disease prevention, we are here to shift your mindset toward a better quality of living.
              </Typography>

              <Box sx={{ mt: 4, p: 3, backgroundColor: '#f0f7fa', borderRadius: '8px' }}>
                <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                  Have questions? Our door is always open.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  Call us at <strong>(647) 823-1656</strong> or email <a href="mailto:gracelee.wenature@gmail.com" className="contact-link">gracelee.wenature@gmail.com</a>.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="about-image-container"
            >
              <img src={portrait} alt="Portrait of Dr. Grace Lee" className="portrait-image" />
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default About;