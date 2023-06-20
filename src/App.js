import React from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Classes from './pages/Classes';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/classes" element={<Classes />} />

      </Routes>
    </>
  )
}

export default App