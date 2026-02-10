// src/sections/About.js
import { Box, Typography, Container } from '@mui/material';
import office2 from "../assets/images/office2.jpg";
import portrait from "../assets/images/portrait.jpg";

const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3, display: 'flow-root' }}>
            <Typography variant="h2" color="primary" gutterBottom>
                About "We Nature Balance"
            </Typography>

            {/* <Box
                component="img"
                src={office1}
                alt="About Us"
                sx={{
                    float: 'right',
                    width: '40%',
                    objectFit: 'cover',
                    ml: 4,
                    mb: 3,
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    '@media (max-width: 600px)': {
                        float: 'none',
                        width: '100%',
                        ml: 0,
                    },
                }}
            /> */}

            <Typography variant="aboutText" color="text.primary" paragraph>
                Welcome to We Nature Balance. We are your pathway to a better and more 
                active way of life. We Nature Balance provides acupuncture treatment 
                services. I treat a variety of health conditions: musculoskeletal issues, hair loss, 
                pain, insomnia, headache, menstrual problems, support IVF (in vitro fertilization), 
                menopausal symptom, support cancer patients, digestive issues, depression, anxiety, etc.
            </Typography>

            <Typography variant="aboutText" color="text.primary">
                We can also serve you with <b>facial 
                rejuvenation acupuncture</b>, a natural way to improve your 
                aging based on the approach to your root causes.
            </Typography>
        </Box>

        <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3, display: 'flow-root' }}>
            <Box
                component="img"
                src={office2}
                alt="About Us"
                sx={{
                    float: 'left',
                    width: '40%',
                    objectFit: 'cover',
                    mr: 4,
                    mb: 3,
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    '@media (max-width: 600px)': {
                        float: 'none',
                        width: '100%',
                        mr: 0,
                    },
                }}
            />

            <Typography variant="aboutText" color="text.primary" paragraph>
                Our mission at We Nature Balance is to help people in our community move, live, and age healthily by offering clinical expertise. 
                We provide a service of excellence and results-oriented care. Whatever your health journey may be, our goal is to ensure that every 
                life is a better one.
            </Typography>
            
        </Box>

        <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3, display: 'flow-root' }}>
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
                    aspectRatio: '1 / 1',
                    ml: 4,
                    mb: 3,
                    borderRadius: '8px',
                    objectFit: 'cover',
                    boxShadow: 3,
                    '@media (max-width: 600px)': {
                        float: 'none',
                        width: '100%',
                        maxWidth: 300,
                        margin: '0 auto',
                    },
                }}
            />

            <Typography variant="aboutText" color="text.primary" paragraph>
                I am Eun Jung Lee. I’m a registered acupuncturist in <strong>Canada</strong> and the <strong>USA</strong> with 
                a focus on pain management. Formerly, I worked as a medical doctor 
                for 17 years in Seoul, South Korea. I also studied naturopathic medicine, 
                in addition to traditional Chinese medicine, in Canada. I can provide 
                beneficial health coaching for you additionally. I help people make 
                changes to their lifestyle and manage their pain using <strong>acupuncture, 
                cupping, MOXA bustion, Tuina massage, light therapy, etc</strong>. As a result, they no longer need to 
                rely on painkillers to sleep or function.
            </Typography>


            <Typography variant="aboutText" color="text.primary" paragraph>
                Interested? At We Nature Balance, first, we get to know your body’s condition, your 
                lifestyle, and your health goals. Then, we will provide you with customized 
                acupuncture treatment. In addition, we will work together to create a 
                healthcare plan that allows you to do self-care to improve and maintain the 
                treatment’s effects. Research strongly supports that proactive healthcare 
                is the most effective; we can help shift your mindset in a way that results 
                in a more meaningful life and a better quality of living.
            </Typography>

            <Typography variant="aboutText" color="text.primary" paragraph>
                We focus on your health depending on your needs: recovery from illness, restoring 
                yin-yang balance, and strengthening your body for disease prevention.
            </Typography>

            <Typography variant="aboutText" color="text.primary" paragraph>
                Please <a href="#contact">Contact Us</a> at <strong>(647) 823-1656</strong> or email at <strong>gracelee.wenature@gmail.com</strong> with any questions you may have. 
                Our door is always open.
            </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
