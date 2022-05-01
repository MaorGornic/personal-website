import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <div id="home" className="home-container">
      <CustomNavbar />
      <Zoom top>
        <Profile />
      </Zoom>
      <Footer />
    </div>
  );
}
