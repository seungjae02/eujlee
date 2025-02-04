// src/sections/About.js
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import office from "../assets/images/office.jpg";
import portrait from "../assets/images/portrait.jpg";

const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
            <Typography variant="h2" color="primary" gutterBottom>
                About "We Nature Balance"
            </Typography>

            <Box
                component="img"
                src={office}
                alt="About Us"
                sx={{
                    float: 'right',
                    width: '45%',
                    ml: 4,
                    mb: 3,
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    '@media (max-width: 600px)': {
                        float: 'none',
                        width: '100%',
                        ml: 0,
                        mb: 3,
                    }
                }}
            />
            
            <Typography variant="body1" color="text.primary" paragraph>
                Welcome to We Nature Balance. We are your pathway to a better 
                and more active way of life.
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
                Our mission at We Nature Balance is to help people in our community 
                move, live, and age healthily by offering clinical expertise. We provide 
                a service of excellence and results-oriented care. Whatever your health 
                journey may be, our goal is to ensure that every life is a better one.
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
                Modern people live very busy lives and suffer from various types of 
                pain due to poor diet, bad posture, and lack of exercise. This pain 
                causes a lot of stress and leads to a lower quality of life.
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
                We focus on your health based on your needs: recovery from illness, restoring 
                yin-yang balance, and strengthening your body for disease prevention.
            </Typography>
        </Box>

        <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
            <Typography variant="h2" color="primary" gutterBottom>
                Meet the Expert
            </Typography>
            <Box
                component="img"
                src={portrait}
                alt="Dr. Eun Jung (Grace) Lee"
                sx={{
                    float: 'right',
                    width: '25%',
                    aspectRatio: '1 / 1',  // Makes it square
                    ml: 4,
                    mb: 3,
                    borderRadius: '8px',   // Makes it circular
                    objectFit: 'cover',    // Ensures image fills the circle
                    boxShadow: 3,
                    '@media (max-width: 600px)': {
                        float: 'none',
                        width: '100%',
                        maxWidth: 300,     // Prevents image from getting too large on mobile
                        margin: '0 auto',  // Centers image on mobile
                        mb: 3,
                    }
                }}
            />
            
            <Typography variant="body1" color="text.primary" paragraph>
                I am Eun Jung (Grace) Lee, a <strong>registered acupuncturist</strong> with a focus on pain 
                management. Previously, I worked as a <strong>Medical Doctor for 17 years</strong> in 
                Seoul, South Korea. I help people make changes to their lifestyles and 
                manage their pain using acupuncture, cupping, and Tuina massage therapy. 
                As a result, they no longer need to rely on painkillers to sleep or function.
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
                Interested? At We Nature Balance, we first get to know your body's condition, your 
                lifestyle, and your health goals. Then, we will provide you with customized 
                acupuncture treatment. In addition, we will work together to create a healthcare 
                plan that enables you to engage in self-care to improve the treatment's effects 
                and change your lifestyle. Research strongly supports that proactive healthcare 
                is more effective, provides a better quality of life, and costs less. We can help 
                you shift your mindset in a way that results in better health, less pain, and a 
                more meaningful life.
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
                Please do not hesitate contact us at <strong>(437) 455-4343</strong> or email at <strong>gracelee.wenature@gmail.com</strong> with any questions you may have. 
                Our door is always open.
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
