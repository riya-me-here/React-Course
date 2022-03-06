import React from "react";
import reactLogo from "../images/logo-small.png";
export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : "light"}>
      <img src={reactLogo} alt="react logo" className="nav--icon"></img>
      <h3 className="nav--logo_text">React Facts</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider-circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
