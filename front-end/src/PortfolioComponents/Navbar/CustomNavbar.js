import React from "react";
import "./CustomNavbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";

export default function CustomNavbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width >= 510 ? (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#education">Education</a>
        </li>
      </ul>
    </nav>
  ) : (
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
  );
}
