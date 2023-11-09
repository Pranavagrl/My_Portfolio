import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Footer from "./Footer";

const Feed = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1anXsi-gOxZjiqUdAnnsXmupZTHsvHJO2/view?usp=sharing";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box sx={{ marginX: { md: 20, lg: 40, sm: 10, xl: 60 } }}>
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

      <Button
        variant="contained"
        color="error"
        sx={{ opacity: 0.8 }}
        onClick={handleDownload}
      >
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
