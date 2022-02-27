import React from "react";
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo.png"></img>
        <ul className="nav-bar">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
