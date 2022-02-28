import React from "react";
import displayPicture from "../images/display-picture.jpeg";
export default function Navbar() {
  return (
    <div className="Info-div">
      <img src={displayPicture} alt="Riya Mehere" className="Info-img"></img>
      <h2 className="Info-name">Riya Mehere</h2>
      <p className="Info-title">Intern @ Konverge AI</p>
      <button id="email-btn">Email</button>
      <button id="linkedIn-btn">LinkedIn</button>
    </div>
  );
}
