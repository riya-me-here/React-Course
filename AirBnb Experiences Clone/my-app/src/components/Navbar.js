import React from "react";
import airbnblogo from "../images/Airbnb_Logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt="air bnb logo" className="nav-logo" />
    </nav>
  );
}
