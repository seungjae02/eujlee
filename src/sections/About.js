// src/sections/About.js
import { Box, Typography, Container, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import './About.css'; 
import office3 from "../assets/images/office3.webp";
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
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                Our treatment modalities include <strong>Acupuncture, Cupping, Gua Sha, Moxibustion, Tuina massage, Education, and Health Coaching</strong> - to help individuals with a variety of health issues include, but not limited to: pain management, musculoskeletal problems, fertility issues, gynecology/hormonal conditions (PCOS, Dysmenorrhea, Endometriosis, PMS), pregnancy support care, depression/anxiety, insomnia, digestion problems, skin issues, cancer patient support, etc. 
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                We also offer <strong>facial rejuvenation acupuncture</strong>—a natural, root-cause approach to graceful aging and skin vitality.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                <strong>Our Approach:</strong> We start by deeply understanding your body’s condition, lifestyle, and goals. Together, we create a proactive healthcare plan emphasizing self-care to maintain your treatment's effects. Whether you need recovery from illness, restoration of yin-yang balance, or disease prevention, we are here to shift your mindset toward a better quality of living.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div {...slideRight} className="about-image-container">
              <img src={office3} alt="We Nature Balance Clinic" className="about-image" style={{ width: '100%', borderRadius: '8px' }} />
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
        <Box sx={{ display: 'block', mb: 10 }}>
          <motion.div {...slideLeft}>
            <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
              Meet the Expert
            </Typography>
            <Typography variant="h5" color="text.primary" gutterBottom sx={{ mb: 3 }}>
              Grace Lee - Registered Acupuncturist, Medical Doctor (S. Korea)
            </Typography>
            
            {/* Floated Circular Image Block */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              sx={{
                float: { xs: 'none', md: 'right' },
                width: { xs: '250px', md: '350px' },
                height: { xs: '250px', md: '350px' },
                mx: { xs: 'auto', md: 0 },
                ml: { md: 5 },
                mb: { xs: 4, md: 2 },
                borderRadius: '50%',
                shapeOutside: 'circle(50%)',
                overflow: 'hidden',
                display: { xs: 'block', md: 'block' }
              }}
            >
              <img 
                src={portrait} 
                alt="Portrait of Dr. Grace Lee" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Box>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              Grace is a Registered Acupuncturist in Canada and the USA. Prior to her practice at We Nature Balance, Grace served as a medical doctor for 17 years in Seoul, South Korea and two and a half years in Canada. In addition to clinical experience, Grace has multiple medical research experiences at university hospitals in South Korea and Canada, which include breast cancer, uterine endometrial cancer, and functional brain MRI with acupuncture.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              Grace studied Traditional Chinese Medicine (TCM) and Acupuncture as an extension of her background in Western medicine. She has grown up in Seoul, South Korea, where oriental medicine is one of the main pillars of medicine. By studying TCM, her understanding of the human body and health broadened from a different point of view. Grace also completed the Naturopathic Medicine program at the Canadian College of Naturopathic Medicine in Toronto. By studying medicine from multiple perspectives, Grace understands a person as a whole. She takes the root causes of diseases as well as mental-emotional connections to imbalances seriously and practices an individualized approach in her patient care and provides holistic health coaching and customized treatments. Grace upholds the principle that an inherent harmony exists between the human body and the natural world, a foundational tenet of Traditional Chinese Medicine. Grace emphasizes the importance of cultivating a well‑balanced lifestyle and prioritizing personal health as a means to restore focus on living a more fulfilling, purposeful, and enriching life. She helps patients manage pain naturally, reducing their reliance on painkillers to sleep and function.
            </Typography>

            <Box sx={{ mt: 4, p: 3, backgroundColor: '#f0f7fa', borderRadius: '8px', clear: 'both' }}>
              <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500 }}>
                Have questions? Our door is always open.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Call us at <strong>(647) 823-1656</strong> or email <a href="mailto:gracelee.wenature@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>gracelee.wenature@gmail.com</a>.
              </Typography>
            </Box>
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
};

export default About;