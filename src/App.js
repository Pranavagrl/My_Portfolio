import React from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router";
import HomeScreen from "./components/HomeScreen";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Stack>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="Home" element={<HomeScreen />} />
        <Route path="Project" element={<Project />} />
        <Route path="WorkExperience" element={<WorkExperience />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Stack>
  );
};

export default App;
