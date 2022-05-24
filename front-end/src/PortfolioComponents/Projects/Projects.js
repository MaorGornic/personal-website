import React from "react";
import "./Projects.css";
import RestifyLogo from "../../assets/Projects/restify.PNG";
import StudytogetherLogo from "../../assets/Projects/studytogether.PNG";
import TransitLogo from "../../assets/Projects/transitapp.PNG";
import Zoom from "react-reveal/Zoom";

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <Zoom>
        <div className="heading-container">
          <h3 className="main-heading">Projects</h3>
          <h5 className="subheading subheading-vone">
            A List of My Featured Projects
          </h5>
          <div className="outter-line outter-line-vone">
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
                restaurants and foods.
                <br />
                <br />
                <span>Technologies used:</span> <br /> Python, Django, React,
                Git, Chakra UI, SQLite, JWT, Javascript, HTML, CSS
              </p>
              <div className="button-group">
                <a href="#">
                  <i className="fa fa-globe fa-2x"></i>
                </a>
                <a href="https://github.com/MaorGornic/Restify" target="_blank">
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </div>
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
              <div className="button-group">
                <a
                  href="https://studytogether-bad5e.firebaseapp.com/"
                  target="_blank"
                >
                  <i className="fa fa-globe fa-2x"></i>
                </a>
                <a
                  href="https://github.com/MaorGornic/StudyTogether"
                  target="_blank"
                >
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </div>
            </div>
            <img src={StudytogetherLogo} alt="" />
          </div>
        </div>
      </Zoom>
      {/* Project 3 */}
      <Zoom>
        <div className="project-left">
          <h1 className="project-title">iGoTransit</h1>
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
              <div className="button-group">
                <a
                  href="https://github.com/IGoTransit/TransitApp"
                  target="_blank"
                >
                  <i className="fa fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
