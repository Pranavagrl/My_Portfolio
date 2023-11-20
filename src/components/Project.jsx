import { Box, Typography } from "@mui/material";
import React from "react";
import Projects from "./Projects";
import Footer from "./Footer";

const Project = () => {
  return (
    <Box>
      <Typography variant="h4" color="#21243D" sx={styles.heading}>
        Projects
      </Typography>
      <Projects projectsToShow={5} />
      <Footer />
    </Box>
  );
};

export default Project;

const styles = {
  heading: {
    fontWeight: "bold",
    my: 5,
    textAlign: "center",
    fontSize: { md: 50, lg: 30 },
  },
};
