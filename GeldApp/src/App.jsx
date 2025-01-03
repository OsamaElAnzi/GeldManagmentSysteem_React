import React from "react";
import NavSideBar from './components/NavSideBar.jsx'
import Home from './components/Pages/Home.jsx'
import Contact from './components/Pages/Contact.jsx'
import Help from './components/Pages/Help.jsx'
import Settings from './components/Pages/Settings.jsx'
import Statestiek from "./components/Pages/Statestiek.jsx"
import './App.scss'

import { Routes ,Route } from 'react-router-dom'
function App() {
  return (
    <div className='d-flex flex-row bg-secondary'>
      <NavSideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/statestiek" element={<Statestiek />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
