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
    <Box >
      {projectsToDisplay.map((project) => (
        <Card sx={{ boxShadow: "none", mb: 2 }} key={project.id}>
          <Box display="flex">
            <CardMedia
              component="img"
              height="180"
              sx={{ width: "230px", borderRadius: 1, mr: 2 }}
              image={project.project_url}
              alt={project.project_name}
            />
            <Box>
              <CardContent sx={{ color: "#21243D" }}>
                <Typography
                  sx={{
                    fontSize: "25px",
                    color: "#21243D",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  {project.project_name}
                </Typography>
                <Chip
                  sx={{
                    mb: 1,
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "#21243D",
                  }}
                  label={project.project_year}
                />
                <Typography variant="body2">
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
