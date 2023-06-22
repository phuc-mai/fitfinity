import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route index path="classes" element={<Classes />} />
        <Route index path="contact" element={<Contact />} />
        <Route index path="about" element={<About />} />

      </Routes>
    </>
  );
};

export default App;
