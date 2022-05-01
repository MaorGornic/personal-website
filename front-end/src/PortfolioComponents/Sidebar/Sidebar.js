/* Used https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar */
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "./Sidebar.css";
import { useState, useEffect } from "react";

export default (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let hamburger = document.getElementsByClassName("bm-burger-button")[0];
    hamburger.style.transition = "all 2s ease-in-out";
    hamburger.style.opacity = 1;
  }, []);

  const handleIsOpen = () => {
    const currState = !isOpen;
    let hamburger = document.getElementsByClassName("bm-burger-button")[0];

    // hide hamburger
    if (currState) {
      // transition: all .5s ease-in-out;
      hamburger.style.transition = "all 0.5s ease-in-out";
      hamburger.style.opacity = 0;
    }

    // unhide hamburger
    else hamburger.style.opacity = 1;

    setIsOpen(currState);
  };

  return (
    <div className="sidebar">
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <a className="menu-item" href="#home" onClick={handleIsOpen}>
          Home
        </a>
        <a className="menu-item" href="#about-me" onClick={handleIsOpen}>
          About Me
        </a>
        <a className="menu-item" href="#experience" onClick={handleIsOpen}>
          Experience
        </a>
        <a className="menu-item" href="#projects" onClick={handleIsOpen}>
          Projects
        </a>
        <a className="menu-item" href="#education" onClick={handleIsOpen}>
          Education
        </a>
      </Menu>
    </div>
  );
};
