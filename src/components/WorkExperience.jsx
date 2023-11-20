import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import WorkData from "../utils/WorkData";
import Footer from "./Footer";

const WorkExperience = () => {
  return (
    <Box sx={{ marginTop: 7 }}>
      {WorkData.map((work) => (
        <Card sx={{ boxShadow: "none", mb: 2 }} key={work.id}>
          <Box sx={styles.card_container}>
            <CardMedia
              component="img"
              sx={styles.imageStyle}
              image={work.work_url}
              alt={work.company_name}
            />
            <Box>
              <CardContent sx={styles.container}>
                <Typography sx={styles.title}>{work.company_name}</Typography>
                <Typography sx={styles.subTitle}>{work.designation}</Typography>
                <Chip sx={styles.chipStyle} label={work.From} />
                <Chip sx={styles.chipStyle} label={work.To} />
                <Typography sx={styles.description} variant="body2">
                  {work.wrok_description}
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      ))}
      <Footer />
    </Box>
  );
};

export default WorkExperience;

const styles = {
  card_container: {
    display: "flex",
    flexDirection: { sm: "column", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
  },

  container: { color: "#21243D", p: { md: 5, lg: 3 } },

  imageStyle: {
    minWidth: { lg: "280px", md: "350px" },
    width: { lg: "230px" },
    p: { md: 5, lg: 0 },
    mr: 2,
  },

  title: {
    fontSize: { md: 60, lg: 25 },
    color: "#21243D",
    fontWeight: "bold",
    mb: { md: 0.5, lg: 0.2 },
  },

  subTitle: {
    fontSize: { md: 50, lg: 20 },
    color: "#21243D",
    mb: { md: 1.5, lg: 1 },
  },

  chipStyle: {
    mb: { md: 3, lg: 2 },
    p: { md: 4, lg: 0 },
    borderRadius: 50,
    fontSize: { md: 35, lg: 20 },
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#21243D",
    mr: 2,
  },

  description: { maxWidth: { md: 900, lg: 800 }, fontSize: { md: 40, lg: 18 } },
};
