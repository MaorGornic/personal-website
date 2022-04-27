import React from "react";
import Zoom from "react-reveal/Zoom";
import "./Education.css";

export default function Education() {
  return (
    <div>
      <Zoom>
        <div className="heading-container">
          <h3 className="main-heading">Education</h3>
          <h5 className="subheading">Where did I study?</h5>
          <div className="outter-line">
            <div className="inner-line"></div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="education-container">
          <div className="education-img-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png"
              alt=""
            />
            <p>University of Toronto</p>
          </div>

          <div className="education-description">
            <p>
              Specializing in <span>Computer Science</span>
              <br />
              I'm in my <span>third year</span> and expecting to graduate on{" "}
              <span>April 2023</span>
              <br />
              <span>CGPA:</span> 3.92/4.0
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
