/* Used https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar */
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { useState } from "react";

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    const currState = !isOpen;
    let hamburger = document.getElementsByClassName("bm-burger-button")[0];

    // hide hamburger
    if (currState) {
      // transition: all .5s ease-in-out;
      hamburger.style.transition = "all .5s ease-in-out";
      hamburger.style.opacity = 0;
    }

    // unhide hamburger
    else hamburger.style.opacity = 1;

    setIsOpen(currState);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
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
