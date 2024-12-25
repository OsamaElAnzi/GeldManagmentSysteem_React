import React, { useEffect, useState } from "react";
import axios from "axios";
import NavSideBar from './components/NavSideBar.jsx'
import Home from './components/Pages/Home.jsx'
import Contact from './components/Pages/Contact.jsx'
import Help from './components/Pages/Help.jsx'
import Settings from './components/Pages/Settings.jsx'

import { Routes ,Route } from 'react-router-dom'
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div className='d-flex flex-row'>
      <NavSideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
