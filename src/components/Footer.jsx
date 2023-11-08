import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box direction="row" sx={{ pt: 15 }}>
        <Facebook sx={{ pr: 2, fontSize: "35px", color: "#21243D" }} />
        <Instagram sx={{ pr: 2, fontSize: "35px", color: "#21243D" }} />
        <Twitter sx={{ pr: 2, fontSize: "35px", color: "#21243D" }} />
        <LinkedIn sx={{ pr: 2, fontSize: "35px", color: "#21243D" }} />
      </Box>
      <Typography variant="subtitle1" sx={{ pt: 1, pb: 5, color: "#21243D" }}>
        Copyright ©2020 All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
