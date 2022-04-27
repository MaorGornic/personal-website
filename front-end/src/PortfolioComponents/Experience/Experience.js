/* Taken from https://codepen.io/anthonydugois/pen/QyYgaN */
import React from "react";
import "./Experience.css";

const { Component } = React;

const Experience = () => (
  <div className="experiences">
    <div className="heading-container">
      <h3 className="main-heading">Experience</h3>
      <h5 className="subheading">A List of My Experiences</h5>
      <div className="outter-line">
        <div className="inner-line"></div>
      </div>
    </div>
    <Tabs selected={0}>
      <TabList>
        <Tab>
          <Button>
            <img
              style={{ width: "100px", borderRadius: "50%" }}
              src="data:image/png;base64,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"
              alt="uoft-logo"
            />
            <p style={{ marginTop: "1rem", marginBottom: 0 }}>UofT</p>
          </Button>
        </Tab>
        <Tab>
          <Button>
            <img
              style={{ width: "100px", borderRadius: "50%" }}
              src="https://pbs.twimg.com/profile_images/1142096191146070016/AaYUWE7r_400x400.png"
              alt="uoft-logo"
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
              Assisted professors in labs (each containing 40 students), marked
              assessments, created unit tests, invigilated examinations, etc
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
      <div className="Tabs">{this.renderChildren(this.props.children)}</div>
    );
  }
}

const TabList = ({ children }) => <ul className="TabList">{children}</ul>;

const Tab = ({ _onClick, _isActive, children }) => (
  <li className={`Tab  ${_isActive ? "is-active" : ""}`} onClick={_onClick}>
    {children}
  </li>
);

const TabPanel = ({ _isActive, children }) => (
  <div className={`TabPanel  ${_isActive ? "is-active" : ""}`}>{children}</div>
);

/* --- */

const Button = ({ children }) => <button className="Button">{children}</button>;

export default Experience;
