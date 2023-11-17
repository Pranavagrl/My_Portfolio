import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import CertificationsData from "../utils/CertificationsData";

const Certifications = () => {
  return (
    <Box>
      <Box sx={styles.heading_container}>
        <Typography sx={{ fontSize: { md: 40, lg: 18 } }}>
          Certifications
        </Typography>
      </Box>
      <Box sx={styles.card_container}>
        {CertificationsData.map((certification) => (
          <Card key={certification.id} sx={styles.card_element}>
            <CardContent sx={{ p: 3 }}>
              <Typography sx={styles.card_header}>
                {certification.title}
              </Typography>
              <Box display="flex" sx={styles.date_container}>
                <Typography sx={styles.date}>{certification.date}</Typography>|
                <Typography sx={styles.category}>
                  {certification.category}
                </Typography>
              </Box>
              <Typography sx={styles.description}>
                {certification.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  heading_container: {
    display: "flex",
    justifyContent: {
      sm: "center",
      md: "center",
      lg: "space-evenly",
      xl: "space-evenly",
    },
    mb: 2,
    pt: 3,
  },
  card_container: {
    display: "flex",
    flexDirection: { sm: "column", md: "column", lg: "row", xl: "row" },
    justifyContent: {
      sm: "center",
      md: "center",
      lg: "space-evenly",
      xl: "space-evenly",
    },
    pb: 5,
  },
  card_element: {
    borderRadius: 5,
    width: { lg: 380 },
    m: { sm: 5, lg: 0 },
    minHeight: { md: 500, lg: 266.5 },
  },
  card_header: {
    fontSize: { md: 60, lg: 25 },
    fontWeight: "bold",
    mb: 1,
  },
  date_container: { fontSize: { md: 60, lg: 20 }, mb: 2 },
  date: { fontSize: { md: 50, lg: 20 }, mr: 1 },
  category: { fontSize: { md: 50, lg: 20 }, ml: 1 },
  description: {
    fontSize: { md: 40, lg: 18 },
  },
};

export default Certifications;
