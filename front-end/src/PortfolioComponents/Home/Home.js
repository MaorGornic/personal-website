import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";
import CustomNavbar from "../Navbar/CustomNavbar";

export default function Home() {
  return (
    <div className="home-container">
      <CustomNavbar />
      <Profile />
      <Footer />
    </div>
  );
}
