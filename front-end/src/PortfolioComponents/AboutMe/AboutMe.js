import React from "react";
import "./AboutMe.css";
import AboutMeImg from "../../assets/Home/me.jpeg";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-heading">
        <h3>About Me</h3>
        <h5>Why Choose Me?</h5>
        <div className="outter-line">
          <div className="inner-line"></div>
        </div>
      </div>
      <div className="about-me-content">
        <div>
          <img src={AboutMeImg} alt="" />
        </div>
        <div>
          <p>
            Full stack web developer with background knowledge of MERN stacks
            with redux, along with a knack of building applications with utmost
            efficiency. Strong professional with a BSC willing to be an asset
            for an organization
          </p>
          <br />
          <h3 style={{ fontWeight: "normal", marginBottom: 0 }}>
            Here are a few highlights:
          </h3>
          <ul>
            <li>Full stack web and mobile development</li>
            <li>Dean's List</li>
            <li>React and React Native</li>
            <li>Building REST API</li>
            <li>Managing database</li>
            <li>Teaching Assistant for numerous courses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
