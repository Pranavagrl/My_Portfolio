import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Box direction="row" sx={{ pt: 10 }}>
        <Facebook sx={styles.iconStyle} />
        <Instagram sx={styles.iconStyle} />
        <Twitter sx={styles.iconStyle} />
        <LinkedIn sx={styles.iconStyle} />
      </Box>
      <Typography sx={styles.footerText}>
        Copyright ©2020 All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  iconStyle: { pr: 2, fontSize: { md: 80, lg: 70 }, color: "#21243D" },

  footerText: { fontSize: { md: 30, lg: 20 }, pt: 1, pb: 5, color: "#21243D" },
};
