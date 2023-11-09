import { Box, Typography } from "@mui/material";
import React from "react";
import Projects from "./Projects";
import Footer from "./Footer";

const Project = () => {
  return (
    <Box sx={{ marginX: { md: 20, lg: 40, sm: 10, xl: 60 }, marginTop: 7 }}>
      <Typography
        variant="h4"
        color="#21243D"
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Projects
      </Typography>
      <Projects projectsToShow={5} />
      <Footer />
    </Box>
  );
};

export default Project;
