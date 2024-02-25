import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import ExerciseDetails from "./components/ExerciseDetail/ExerciseDetails";

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
  );
};

export default App;
