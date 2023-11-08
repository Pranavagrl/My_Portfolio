import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import React from "react";

const Certifications = () => {
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 1 }}
      >
        <Typography>Certifications</Typography>
        <Link href="ViewAll">View all</Link>
      </Box>
      <Box display="flex" justifyContent="space-evenly" pb={5}>
        <Card sx={{ width: 290, mx: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: "bold", mb: 1 }}>
              Web Development Course
            </Typography>
            <Box display="flex" sx={{ mb: 2 }}>
              <Typography sx={{ mr: 1 }}>30 June 2021</Typography>|
              <Typography sx={{ ml: 1 }}>Frontend</Typography>
            </Box>
            <Typography variant="body2">
              Developed a Filtered To-do List and Virtual piano as a project in
              this program
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 290, mx: 3 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: "bold", mb: 1 }}>
              Data Scientist Course(MLDL)
            </Typography>
            <Box display="flex" sx={{ mb: 2 }}>
              <Typography sx={{ mr: 1 }}>20 June 2022</Typography>|
              <Typography sx={{ ml: 1 }}>AI</Typography>
            </Box>
            <Typography variant="body2">
              In This Machine Learning Course, I have been worked on different
              Project like Flipkart Review Scrapper, Income Prediction, Wafer
              Fault Detection and many more.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Certifications;
