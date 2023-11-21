import { Box, Typography } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <Box>
      <HeroBanner />

      <Box sx={styles.container}>
        <Certifications />
      </Box>

      <Typography sx={styles.title}>Projects</Typography>

      <Projects projectsToShow={3} />

      <Footer />
    </Box>
  );
};

export default HomeScreen;

const styles = {
  container: {
    backgroundColor: "#EDF7FA",
    mt: { md: 0.5, lg: 4 },
    display: { sm: "flex", md: "flex", lg: "block", xl: "block" },
    justifyContent: {
      sm: "center",
      md: "center",
      lg: "space-evenly",
      xl: "space-evenly",
    },
  },

  title: {
    textAlign: "center",
    fontSize: { md: 42, lg: 18 },
    py: 2,
  },
};
