import React from "react";
import locationIcon from "../images/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="card img 1" className="card-img" />
      <div className="card-info">
        <img src={locationIcon} alt="location-img" className="location-icon" />
        <span className="country"> {props.country}</span>
        <a href={props.url} className="url">
          Click to view on map
        </a>
        <br />
        <p className="place"> {props.place}</p>
        <br />
        <span className="date"> {props.date}</span>
        <br />
        <span className="desc"> {props.description}</span>
        <hr className="hr-line" />
      </div>
    </div>
  );
}
