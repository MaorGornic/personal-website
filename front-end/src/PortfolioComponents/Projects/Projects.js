import React from "react";
import "./Projects.css";
import RestifyLogo from "../../assets/Projects/restify.PNG";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="heading-container">
        <h3 className="main-heading">Projects</h3>
        <h5 className="subheading">A List of My Featured Projects</h5>
        <div className="outter-line">
          <div className="inner-line"></div>
        </div>
      </div>
      {/* Project 1 */}
      <div className="project-left">
        <h1 className="project-title">Restify</h1>
        <div className="project-container">
          <img src={RestifyLogo} alt="" />
          <div className="project-description">
            <p>
              A restaurant social media platform web application that allows
              restaurant owners to advertise their restaurant, publish their
              menu, location, contact information, create blogs, communicate
              with other restaurant owners, grow their audience and much more.
              Moreover, users can use this social media to explore new
              restaurants, foods, reach out to restaurant owners, and construct
              constructive feedback for different restaurants.
              <br />
              <br />
              <span>Technologies used:</span> <br /> Python, Django, React, Git,
              SQLite, JWT
            </p>
          </div>
        </div>
      </div>
      {/* Project 2 */}
      <div className="project-right">
        <h1 className="project-title">StudyTogether</h1>
        <div className="project-container">
          <div className="project-description">
            <p>
              A restaurant social media platform web application that allows
              restaurant owners to advertise their restaurant, publish their
              menu, location, contact information, create blogs, communicate
              with other restaurant owners, grow their audience and much more.
              Moreover, users can use this social media to explore new
              restaurants, foods, reach out to restaurant owners, and construct
              constructive feedback for different restaurants.
              <br />
              <br />
              <span>Technologies used:</span> <br /> Python, Django, React, Git,
              SQLite, JWT
            </p>
          </div>
          <img src={RestifyLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
