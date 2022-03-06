import React from "react";
import reactLogo from "../images/header-icon.png";
export default function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="react logo" className="nav--icon"></img>
      <h3 className="nav--logo_text">Meme Generator</h3>
      <h3 className="nav--title">React Course - Project 3</h3>
    </nav>
  );
}
