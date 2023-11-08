import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Footer from "./Footer";

const Feed = () => {
  return (
    <Box sx={{ marginX: 65 }}>
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
        }}
      >
        <Box
          sx={{
            mr: 10,
            alignSelf: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "40px" }}
          >
            Hi, I am Pranav Agrawal,
            <br />
            Software Developer
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            I'm passionate about technology and committed to continuous learning
            <br />
            as I embark on my journey to contribute to the world through
            innovative solutions.
          </Typography>
        </Box>

        <Avatar
          alt="Pranav Agrawal"
          src="/img1.jpg"
          sx={{
            width: 260,
            height: 260,
          }}
        />
      </Box>
      <Button variant="contained" color="error" sx={{ opacity: 0.8 }}>
        Download Resume
      </Button>

      <Box sx={{ backgroundColor: "#EDF7FA", mt: 7 }}>
        <Certifications />
      </Box>
      <Typography sx={{ my: 3 }}>Projects</Typography>
      <Projects projectsToShow={3} />
      <Footer />
    </Box>
  );
};

export default Feed;