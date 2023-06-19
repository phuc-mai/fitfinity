import React from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App