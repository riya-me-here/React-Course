import React from "react";
import locationIcon from "../images/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card img 1" className="card-img" />
      <div className="card-info">
        <img src={locationIcon} alt="location-img" className="location-icon" />
        <span className="country"> {props.country}</span>
        <br />
        <p className="place"> {props.place}</p>
        <br />
        <span className="date"> {props.date}</span>
        <br />
        <span className="desc"> {props.description}</span>
      </div>
    </div>
  );
}
