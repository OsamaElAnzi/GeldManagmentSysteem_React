import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import { Overons, Instellingen, Home } from './components/pages';



function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" active element={<Home />} />
          <Route path="/overons" element={<Overons />} />
          <Route path="/instellingen" element={<Instellingen />} />
        </Routes>
      </div>
  )
}

export default App
