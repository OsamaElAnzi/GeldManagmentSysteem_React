import React , { useState }from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/overons"}>Over ons</NavLink>
            </li>
            <li>
                <NavLink to={"/instellingen"}>Instellingen</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
