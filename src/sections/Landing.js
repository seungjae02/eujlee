// src/sections/Landing.js
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import landing from "../assets/images/landing2.webp";

function Landing() {
  
  // Allows the new CTA button to smoothly scroll to the contact form
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Extended to 100vh for a fully immersive screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Premium Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          transform: "translateY(-5%)", // Perfectly centers the visual weight
        }}
      >
        {/* Animated Main Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h1" // Changed to h1 for better SEO
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "4.5rem" }, // Automatically resizes for mobile vs desktop!
              textShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
              letterSpacing: "-0.02em"
            }}
          >
            Bridging Science and Tradition
          </Typography>
        </motion.div>

        {/* Animated Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} // Delays by 0.3s
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              mb: 5,
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              textShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
              lineHeight: 1.5,
            }}
          >
            Expert Care Combining Western Medicine and Chinese Wisdom
          </Typography>
        </motion.div>

        {/* Animated Call-To-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }} // Delays by 0.6s
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<EventAvailableIcon />}
            onClick={() => handleScrollToSection("contact")}
            sx={{
              backgroundColor: "#82A192", // Matches your teal theme
              color: "white",
              padding: "14px 40px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "30px", // Pill shape for a modern look
              textTransform: "none",
              boxShadow: "0 8px 20px rgba(0, 121, 107, 0.4)",
              "&:hover": {
                backgroundColor: "#004d40",
                transform: "translateY(-3px)", // Lifts up slightly when hovered!
                boxShadow: "0 12px 25px rgba(0, 121, 107, 0.5)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Book Your Consultation
          </Button>
        </motion.div>

      </Container>
    </Box>
  );
}

export default Landing;