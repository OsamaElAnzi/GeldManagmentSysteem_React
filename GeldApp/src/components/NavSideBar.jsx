import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaEnvelope, FaQuestionCircle, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";

const NavSideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`d-flex flex-column bg-primary text-white p-3 ${isCollapsed ? "collapsed" : ""}`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        {!isCollapsed && <h3 className="text-center">Dashboard</h3>}
        <button
          className="btn btn-link text-white p-0 ms-auto"
          onClick={toggleSidebar}
          style={{ fontSize: "1.5rem" }}
        >
          {isCollapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      <NavLink
        to="/"
        className="nav-link text-white py-2 d-flex align-items-center"
        activeClassName="bg-white text-primary rounded"
      >
        <FaHome className="me-2" style={{ fontSize: "1.5rem" }} />
        {!isCollapsed && <span>Home</span>}
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-link text-white py-2 d-flex align-items-center"
        activeClassName="bg-white text-primary rounded"
      >
        <FaEnvelope className="me-2" style={{ fontSize: "1.5rem" }} />
        {!isCollapsed && <span>Contact</span>}
      </NavLink>
      <NavLink
        to="/statestiek"
        className="nav-link text-white py-2 d-flex align-items-center"
        activeClassName="bg-white text-primary rounded"
      >
        <IoStatsChart className="me-2" style={{ fontSize: "1.5rem" }} />
        {!isCollapsed && <span>Statestiek</span>}
      </NavLink>
      <NavLink
        to="/help"
        className="nav-link text-white py-2 d-flex align-items-center"
        activeClassName="bg-white text-primary rounded"
      >
        <FaQuestionCircle className="me-2" style={{ fontSize: "1.5rem" }} />
        {!isCollapsed && <span>Help</span>}
      </NavLink>
      <NavLink
        to="/settings"
        className="nav-link text-white py-2 d-flex align-items-center"
        activeClassName="bg-white text-primary rounded"
      >
        <FaCog className="me-2" style={{ fontSize: "1.5rem" }} />
        {!isCollapsed && <span>Instellingen</span>}
      </NavLink>
    </div>
  );
};

export default NavSideBar;
