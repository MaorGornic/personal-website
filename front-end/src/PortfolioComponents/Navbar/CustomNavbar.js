import React from "react";
import "./CustomNavbar.css";

export default function CustomNavbar() {
  return (
    <nav className="navbar">
      {/* <p className="logo">Maor</p> */}
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
