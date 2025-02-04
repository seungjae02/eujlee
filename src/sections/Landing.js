// src/Landing.js
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import landing from "../assets/images/landing.webp";

function Landing() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Dimmed Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Dimmed black overlay
          zIndex: 1,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          transform: "translateY(-10%)", // Move text slightly up
        }}
      >
        {/* Animated Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: "3rem", // Increase size of primary slogan
              textShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            Bridging Science and Tradition
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "300",
              fontSize: "1.5rem", // Increase size of secondary message
              textShadow: "0px 3px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Expert Care Combining Western Medicine and Chinese Wisdom
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Landing;
