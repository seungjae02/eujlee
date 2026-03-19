import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion"; // Import framer-motion
import logo from "../assets/images/logo-transparent-png.png";
import "./NavBar.css"; 

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setMobileOpen(false), 300);
    }
  };

  return (
    <>
      {/* Framer Motion Wrapper for the slide-down effect */}
      <motion.div
        initial={{ y: -100 }} // Starts 100px above the screen
        animate={{ y: 0 }}    // Slides down to its natural position
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        <AppBar
          position="static" // Changed to static because the motion.div wrapper handles the stickiness now
          elevation={0}
          className={`navbar ${scrolled ? "scrolled" : ""}`}
        >
          <Container maxWidth="xl">
            <Toolbar className="navbar-toolbar" disableGutters>
              
              {/* Logo & Brand Name */}
              <Box onClick={() => handleScrollToSection("home")} className="logo-container">
                <Box
                  component="img"
                  src={logo}
                  alt="We Nature Balance Logo"
                  className="logo-img"
                />
                <Typography variant="h6" className="brand-name">
                  WE NATURE BALANCE
                </Typography>
              </Box>

              {/* Desktop Navigation */}
              <Box className="desktop-nav">
                <Button className="nav-link" onClick={() => handleScrollToSection("home")}>HOME</Button>
                <Button className="nav-link" onClick={() => handleScrollToSection("about")}>ABOUT</Button>
                <Button className="nav-link" onClick={() => handleScrollToSection("services")}>SERVICES</Button>
                <Button className="nav-link" onClick={() => handleScrollToSection("resources")}>RESOURCES</Button>
                <Button className="nav-link" onClick={() => handleScrollToSection("contact")}>CONTACT</Button>
                
                <Button className="btn-book-now" onClick={() => handleScrollToSection("contact")}>
                  BOOK NOW
                </Button>
              </Box>

              {/* Hamburger Menu Icon (Mobile) */}
              <IconButton
                edge="end"
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(true)}
                sx={{ color: "#2c3e50" }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        classes={{ paper: 'drawer-paper' }}
      >
        <Box className="drawer-header">
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon fontSize="large" sx={{ color: "#2c3e50" }} />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />

        <List sx={{ px: 2 }}>
          {["home", "about", "services", "resources", "contact"].map((text) => (
            <ListItem 
              button 
              key={text} 
              className="mobile-nav-item"
              onClick={() => handleScrollToSection(text)}
            >
              <ListItemText 
                primary={text.toUpperCase()} 
                className="mobile-nav-text"
              />
            </ListItem>
          ))}
          
          <Box sx={{ mt: 4, px: 2 }}>
            <Button 
              fullWidth
              className="btn-book-now"
              onClick={() => handleScrollToSection("contact")}
              sx={{ ml: 0 }} 
            >
              BOOK NOW
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;