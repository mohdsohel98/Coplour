// src/components/Navbar.jsx
import React from "react";
import "./Header.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">coplur</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
