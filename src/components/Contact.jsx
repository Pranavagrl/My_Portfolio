import { Avatar, Box, Card, Typography } from "@mui/material";
import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Box
      mt={10}
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          minWidth: "400px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #21243D",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#21243D",
            py: 3,
          }}
        >
          Contact Us
        </Typography>
        <Avatar
          alt="Pranav Agrawal"
          src="/img1.jpg"
          sx={{
            width: 260,
            height: 260,
            mb: 4,
          }}
        />
        <Box
          display="flex"
          sx={{
            px: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              py: 2,
              pr: 3,
              color: "#21243D",
            }}
          >
            Email:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              py: 2,
              color: "#21243D",
            }}
          >
            Pranavagrl.march17@gmail.com
          </Typography>
        </Box>

        <Box
          display="flex"
          sx={{
            px: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              pr: 3,
              color: "#21243D",
            }}
          >
            Phone No:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#21243D",
            }}
          >
            6267375772
          </Typography>
        </Box>
      </Card>
      <Footer />
    </Box>
  );
};

export default Contact;
