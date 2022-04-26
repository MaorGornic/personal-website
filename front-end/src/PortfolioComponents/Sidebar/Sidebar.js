/* Used https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar */
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="#">
        Home
      </a>
      <a className="menu-item" href="#">
        About Me
      </a>
      <a className="menu-item" href="#">
        Experience
      </a>
      <a className="menu-item" href="#">
        Projects
      </a>
      <a className="menu-item" href="#">
        Education
      </a>
    </Menu>
  );
};
