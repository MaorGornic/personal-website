import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-heading">
        <h3>About Me</h3>
        <h5>Why choose me?</h5>
        <div className="outter-line">
          <div className="inner-line"></div>
        </div>
      </div>
      <div className="about-me-content">
        <div className="about-content-col1"></div>
        <div className="about-content-col2"></div>
      </div>
    </div>
  );
}
