import React from "react";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Home", "Project", "WorkExperience", "Contact"];

const Navbar = () => {
  return (
    <Toolbar disableGutters>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mx: 1, fontWeight: "bold" }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
        Portfolio
      </Typography>
      <Box
        sx={{
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
          mr: 4,
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: "#21243D",
              display: "block",
              fontWeight: "bold",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "#21243D",
                fontSize: "bold",
              }}
              to={`/${page}`}
            >
              {page}
            </Link>
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Navbar;
