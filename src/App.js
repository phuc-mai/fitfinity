import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Schedule from "./pages/Schedule";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route index path="classes" element={<Classes />} />
        <Route index path="contact" element={<Contact />} />
        <Route index path="about" element={<About />} />
        <Route index path="pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default App;
