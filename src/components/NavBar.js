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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo-transparent-png.png";
import "./NavBar.css"; // Import CSS file

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      <AppBar
        position="sticky"
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        sx={{ top: 0, zIndex: 1000 }}
      >
        <Toolbar className="navbar-toolbar">
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            className="logo"
            onClick={() => handleScrollToSection("home")}
            sx={{ cursor: "pointer", height: "80px" }}
          />
          <Typography className="nav-title" variant="h6" sx={{ flexGrow: 1 }}>
            WE NATURE BALANCE
          </Typography>

          {/* Desktop Navigation (Right-Aligned) */}
          <Box className="nav-links">
            <Button className="nav-button" onClick={() => handleScrollToSection("home")}>
              HOME
            </Button>
            <Button className="nav-button" onClick={() => handleScrollToSection("about")}>
              ABOUT
            </Button>
            <Button className="nav-button" onClick={() => handleScrollToSection("services")}>
              SERVICES
            </Button>
            <Button className="nav-button" onClick={() => handleScrollToSection("contact")}>
              CONTACT
            </Button>
            <Button variant="outlined" className="book-now">
              BOOK NOW
            </Button>
          </Box>

          {/* Hamburger Menu (Right Side) */}
          <IconButton
            edge="end"
            className="menu-button"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "60vw",
            maxWidth: "300px",
            background: "rgba(130, 161, 146, 0.95)",
          },
        }}
      >
        <List className="mobile-menu">
          <ListItem button onClick={() => handleScrollToSection("home")}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button onClick={() => handleScrollToSection("about")}>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem button onClick={() => handleScrollToSection("services")}>
            <ListItemText primary="SERVICES" />
          </ListItem>
          <ListItem button onClick={() => handleScrollToSection("contact")}>
            <ListItemText primary="CONTACT" />
          </ListItem>
          <ListItem button onClick={() => handleScrollToSection("book")}>
            <Button variant="outlined" className="book-now">
              BOOK NOW
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
