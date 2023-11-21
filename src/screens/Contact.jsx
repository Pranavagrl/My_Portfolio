import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Box mt={10} sx={styles.mian_container}>
      <Card sx={styles.card_container}>
        <Typography variant="h4" sx={styles.title}>
          Contact Us
        </Typography>
        <Avatar alt="Pranav Agrawal" src="/img1.jpg" sx={styles.imageStyle} />
        <Box display="flex" sx={styles.description}>
          <Typography variant="h6" sx={styles.sub_description}>
            Email:
          </Typography>
          <Typography variant="body1" sx={styles.sub_description}>
            Pranavagrl.march17@gmail.com
          </Typography>
        </Box>

        <Box display="flex" sx={styles.description}>
          <Typography variant="h6" sx={styles.sub_description}>
            Phone No:
          </Typography>
          <Typography variant="body1" sx={styles.sub_description}>
            6267375772
          </Typography>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
};

export default Contact;

const styles = {
  mian_container: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card_container: {
    minWidth: { md: 600, lg: 400 },
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #21243D",
    borderRadius: "5px",
  },

  title: {
    fontSize: { md: 50, lg: 25 },
    fontWeight: "bold",
    color: "#21243D",
    py: { md: 5, lg: 3 },
  },

  imageStyle: {
    width: { md: 500, lg: 340 },
    height: { md: 500, lg: 340 },
    mb: 4,
  },

  description: {
    p: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  sub_description: {
    pr: 2,
    fontSize: { md: 40, lg: 20 },
    color: "#21243D",
  },
};
