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
    <Box sx={{ marginX: { md: 20, lg: 40, sm: 10, xl: 60 }, marginTop: 7 }}>
      {WorkData.map((work) => (
        <Card sx={{ boxShadow: "none", mb: 2 }} key={work.id}>
          <Box display="flex">
            <CardMedia
              component="img"
              sx={{
                minWidth: { lg: "280px", md: "350px" },
                width: { xl: "230px" },
                mr: 2,
              }}
              image={work.work_url}
              alt={work.company_name}
            />
            <Box>
              <CardContent sx={{ color: "#21243D" }}>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#21243D",
                    fontWeight: "bold",
                    mb: 0.2,
                  }}
                >
                  {work.company_name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#21243D",
                    fontWeight: "500",
                    mb: 1,
                  }}
                >
                  {work.designation}
                </Typography>
                <Chip
                  sx={{
                    mb: 1,
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#21243D",
                    mr: 2,
                  }}
                  label={work.From}
                />
                <Chip
                  sx={{
                    mb: 1,
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#21243D",
                  }}
                  label={work.To}
                />
                <Typography variant="body2">{work.wrok_description}</Typography>
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
