/* Taken from https://codepen.io/anthonydugois/pen/QyYgaN */
import React from "react";
import "./Experience.css";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import hdsbLogo from "../../assets/experience/hdsb-logo.png";
import uoftLogo from "../../assets/experience/uoft-logo.png";

const { Component } = React;

const Experience = () => (
  <div id="experience" className="experiences">
    <Header />
    <Zoom>
      <div className="heading-container">
        <h3 className="main-heading main-heading-vtwo">Experience</h3>
        <h5 className="subheading subheading-vtwo">A List of My Experiences</h5>
        <div className="outter-line outter-line-vtwo">
          <div className="inner-line"></div>
        </div>
      </div>
      <Tabs selected={0}>
        <TabList>
          <Tab>
            <Button>
              <img
                style={{ width: "100px", borderRadius: "50%" }}
                src={uoftLogo}
                alt="uoft-logo"
              />
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>UofT</p>
            </Button>
          </Tab>
          <Tab>
            <Button>
              <img
                style={{ width: "100px", borderRadius: "50%" }}
                src={hdsbLogo}
                alt="hdsb-logo"
              />
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>HDSB</p>
            </Button>
          </Tab>
        </TabList>

        {/* Corresponds to tab 1 */}
        <TabPanel>
          <div className="job-entry-container">
            <div className="job-entry-row">
              <div className="job-title">
                Computer Science Teaching Assistant (CSC209)
              </div>
              <div className="job-date">January 2022 - April 2022</div>
            </div>
            <div className="company">University of Toronto</div>
            <ul class="job-description">
              <li>
                Assisted professors in labs (each containing 40 students),
                marked assessments, created unit tests, invigilated
                examinations, etc
              </li>
              <li>
                Taught students software tools and system programming concepts,
                including Bash, C, Makefiles, and Sockets.
              </li>
            </ul>
          </div>
        </TabPanel>

        {/* Corresponds to tab 2 */}
        <TabPanel>
          <div className="job-entry-container">
            <div className="job-entry-row">
              <div className="job-title">Software Developer</div>
              <div className="job-date">February 2019 - August 2019</div>
            </div>
            <div className="company">Halton District School Board</div>
            <ul class="job-description">
              <li>
                Created a Java-based tool (known as EzAutomator) that allowed my
                co-workers to easily write automation scripts without any
                programming knowledge.
              </li>
              <li>Automated data entry and daily encountered tasks.</li>
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </Zoom>
    <Footer />
  </div>
);

/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

class Tabs extends Component {
  state = { selected: this.props.selected };

  setSelected(selected) {
    if (selected !== this.state.selected) {
      this.setState({ selected });
    }
  }

  handleClick(tab) {
    return () => this.setSelected(tab);
  }

  renderTabList(child) {
    let tab = 0;

    return React.cloneElement(child, {
      children: React.Children.map(child.props.children, (childTab) => {
        if (childTab.type.name === "Tab") {
          const _isActive = tab === this.state.selected;
          const _onClick = this.handleClick(tab);

          tab++;

          return React.cloneElement(childTab, { _isActive, _onClick });
        }

        return childTab;
      }),
    });
  }

  renderChildren(children) {
    let panel = 0;

    return React.Children.map(children, (child) => {
      if (child.type.name === "TabList") {
        return this.renderTabList(child);
      }

      if (child.type.name === "TabPanel") {
        const _isActive = panel === this.state.selected;

        panel++;

        return React.cloneElement(child, { _isActive });
      }

      return child;
    });
  }

  render() {
    return (
      <div className="tabs">{this.renderChildren(this.props.children)}</div>
    );
  }
}

const TabList = ({ children }) => <ul className="tab-list">{children}</ul>;

const Tab = ({ _onClick, _isActive, children }) => (
  <li className={`tab  ${_isActive ? "is-active" : ""}`} onClick={_onClick}>
    {children}
  </li>
);

const TabPanel = ({ _isActive, children }) => (
  <div className={`tab-panel  ${_isActive ? "is-active" : ""}`}>{children}</div>
);

/* --- */

const Button = ({ children }) => <button className="button">{children}</button>;

export default Experience;
