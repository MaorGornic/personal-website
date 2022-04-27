import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import CustomNavbar from "../Navbar/CustomNavbar";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <div className="home-container">
      <Zoom top>
        <CustomNavbar />
        <Profile />
      </Zoom>
      <Footer />
    </div>
  );
}
