import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

const HeroBanner = () => {
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
    <Box>
      <Box sx={styles.main_container}>
        <Box sx={[styles.description, styles.commonStyle]}>
          <Typography variant="h3" sx={styles.heading}>
            Hi, I am Pranav Agrawal,
            <Typography
              variant="h3"
              sx={[styles.heading, { textAlign: "center" }]}
            >
              Software Developer
            </Typography>
          </Typography>
          <Typography sx={[styles.commonStyle, styles.detail]}>
            I'm passionate about technology and committed to continuous learning
            as I<br />
            embark on my journey to contribute to the world through innovative
            solutions.
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={styles.button}
            onClick={handleDownload}
          >
            Download Resume
          </Button>
        </Box>

        <Avatar alt="Pranav Agrawal" src="/img1.jpg" sx={styles.avatar} />
      </Box>
    </Box>
  );
};

const styles = {
  main_container: {
    marginTop: 12,
    display: "flex",
    flexDirection: {
      sm: "column-reverse",
      md: "column-reverse",
      lg: "row",
    },
    justifyContent: "center",
    alignItems: "center",
    pb: { sm: 5, lg: 0 },
  },

  heading: {
    fontSize: { md: 70, lg: 50 },
    fontWeight: "bold",
  },

  description: {
    marginTop: 5,
    mr: { lg: 5 },
  },

  avatar: {
    width: { md: 500, lg: 340 },
    height: { md: 500, lg: 340 },
  },

  button: { mt: 5, opacity: 0.8, fontSize: { sm: 35, lg: 20 } },

  detail: {
    mt: 2,
    fontSize: { md: 25 },
    pl: { sm: 12, lg: 0 },
  },

  commonStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default HeroBanner;
