import React from "react";
import "./Projects.css";
import RestifyLogo from "../../assets/Projects/restify.PNG";
import StudytogetherLogo from "../../assets/Projects/studytogether.PNG";
import TransitLogo from "../../assets/Projects/transitapp.PNG";
import Zoom from "react-reveal/Zoom";

export default function Projects() {
  return (
    <div className="projects-container">
      <Zoom>
        <div className="heading-container">
          <h3 className="main-heading">Projects</h3>
          <h5 className="subheading">A List of My Featured Projects</h5>
          <div className="outter-line">
            <div className="inner-line"></div>
          </div>
        </div>
      </Zoom>
      {/* Project 1 */}
      <Zoom>
        <div className="project-left">
          <h1 className="project-title">Restify</h1>
          <div className="project-container">
            <img src={RestifyLogo} alt="" />
            <div className="project-description">
              <p>
                A restaurant social media platform web application that allows
                restaurant owners to advertise their restaurant, create blogs,
                communicate with other restaurant owners, grow their audience
                and much more. Users can use this social media to explore new
                restaurants, foods, and construct constructive feedback for
                different restaurants.
                <br />
                <br />
                <span>Technologies used:</span> <br /> Python, Django, React,
                Git, Chakra UI, SQLite, JWT, Javascript, HTML, CSS
              </p>
            </div>
          </div>
        </div>
      </Zoom>
      {/* Project 2 */}
      <Zoom>
        <div className="project-right">
          <h1 className="project-title">StudyTogether</h1>
          <div className="project-container">
            <div className="project-description">
              <p>
                A web application that facilitates the process of forming study
                groups at universities across the world.
                <br />
                <br />
                <span>Technologies used:</span> <br /> MongoDB, Express.js,
                React, Node,js, Jira, Git, Chakra UI, JWT, Firebase, Javascript,
                HTML, CSS, Redux
              </p>
            </div>
            <img src={StudytogetherLogo} alt="" />
          </div>
        </div>
      </Zoom>
      {/* Project 3 */}
      <Zoom>
        <div className="project-left">
          <h1 className="project-title">IGoTransit</h1>
          <div className="project-container">
            <img src={TransitLogo} alt="" />
            <div className="project-description">
              <p>
                A Java program that simulates electronic transit systems in
                Canada ie. PRESTO, TTC etc. There are two types of users in this
                program i.e. Admins and Cardholders. Cardholders are civilians
                utilizing the transportation while the Admin is the
                owner/manager of said transportation system.
                <br />
                <br />
                <span>Technologies used:</span> <br /> Java, JavaFX, CSS
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
