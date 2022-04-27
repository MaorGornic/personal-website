import React from "react";
import "./CustomNavbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";

export default function CustomNavbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width >= 510 ? (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#">Education</a>
        </li>
      </ul>
    </nav>
  ) : (
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
  );
}
