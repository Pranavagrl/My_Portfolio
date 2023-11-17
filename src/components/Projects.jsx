import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import projectData from "../utils/ProjectData";

const Projects = ({ projectsToShow }) => {
  const projectsToDisplay = projectData.slice(0, projectsToShow);
  return (
    <Box marginTop={1}>
      {projectsToDisplay.map((project) => (
        <Card sx={{ boxShadow: "none", mb: 2 }} key={project.id}>
          <Box sx={styles.card_container}>
            <CardMedia
              component="img"
              height="180"
              sx={styles.imageStyle}
              image={project.project_url}
              alt={project.project_name}
            />
            <Box>
              <CardContent sx={{ color: "#21243D" }}>
                <Typography sx={styles.title}>
                  {project.project_name}
                </Typography>
                <Chip sx={styles.chipStyle} label={project.project_year} />
                <Typography sx={styles.description}>
                  {project.project_description}
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default Projects;

const styles = {
  card_container: {
    display: "flex",
    flexDirection: { md: "column", lg: "row" },
    justifyContent: "center",
    alignItems: "center",
  },

  imageStyle: {
    borderRadius: 2,
    width: { lg: "230px" },
    p: { md: 5, lg: 0 },
    minHeight: { md: 600, lg: 180 },
  },

  title: {
    fontSize: { md: 60, lg: 25 },
    color: "#21243D",
    fontWeight: "bold",
    mb: { md: 2, lg: 1 },
  },

  chipStyle: {
    mb: { md: 3, lg: 2 },
    p: { md: 3, lg: 0 },
    fontSize: { md: 35, lg: 20 },
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#21243D",
  },

  description: {
    fontSize: { md: 40, lg: 18 },
    maxWidth: { md: 900, lg: 800 },
  },
};
