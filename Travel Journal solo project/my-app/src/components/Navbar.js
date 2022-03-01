import React from "react";
import Logo from "../images/icon.png";
export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" className="nav--icon"></img>
      <h3 className="nav--logo_text">My Travel Journal</h3>
    </nav>
  );
}
