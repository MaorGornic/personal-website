import React from "react";
import "./AboutMe.css";
import AboutMeImg from "../../assets/Home/me.jpeg";
import Zoom from "react-reveal/Zoom";

export default function AboutMe() {
  return (
    <div id="about-me" className="about-me-container">
      <Zoom>
        <div className="heading-container">
          <h3 className="main-heading">About Me</h3>
          <h5 className="subheading">Why Choose Me?</h5>
          <div className="outter-line">
            <div className="inner-line"></div>
          </div>
        </div>
        <div className="about-me-content">
          <div className="about-me-img-container">
            <img src={AboutMeImg} alt="" />
          </div>
          <div className="about-me-text-container">
            <p>
              Full stack web developer who is passionate about bringing ideas to
              life, has experience working with a wide range of technologies,
              eager to learn, and build applications with utmost efficiency.
              Strong professional with HBSc willing to be an asset for an
              organization.
            </p>
            <br />
            <h3
              style={{
                fontWeight: "normal",
                marginBottom: 0,
                textAlign: "left",
                marginLeft: "4rem",
              }}
            >
              Here are a few highlights:
            </h3>
            <ul>
              <li>Full Stack Web and Mobile Development</li>
              <li>Distributed Systems Development</li>
              <li>React and React Native Development</li>
              <li>Building REST API</li>
              <li>Managing Databases</li>
              <li>On Dean's Honours List</li>
            </ul>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
