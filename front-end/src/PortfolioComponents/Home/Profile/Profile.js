import React from "react";
import "./Profile.css";
import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/maor-gornic-00b6b119a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Maor</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("An Enthusiastic Developer")

                      .pauseFor(1000)
                      .start();
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Who enjoys learning and turning ideas into reality
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:maor.gornic@mail.utoronto.ca">
              <button className="btn primary-btn"> Contact Me </button>
            </a>
            <a href="Resume.pdf" download="Maor Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
