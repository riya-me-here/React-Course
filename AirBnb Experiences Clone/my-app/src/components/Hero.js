import React from "react";
import grid from "../images/grid.JPG";

export default function Hero() {
  return (
    <section className="hero">
      <img src={grid} alt="grid-img" className="hero-photo" />
      <h1 className="hero-h1">Online Experiences</h1>
      <p className="hero-p">
        Join interactive activities lead by one-of-a-kind hosts-all without
        leaving home
      </p>
    </section>
  );
}
