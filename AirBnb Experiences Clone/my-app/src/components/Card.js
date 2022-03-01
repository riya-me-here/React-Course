import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  let badegText;
  if (props.item.openSpots === 0) {
    badegText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badegText = "ONLINE";
  }
  return (
    <div className="card">
      {badegText && <div className="card-sold-out">{badegText}</div>}
      <img src={props.item.img} alt="card img 1" className="card-img" />
      <div className="card-stats">
        <img src={star} alt="star-img" className="star-img" />
        <span> {props.item.rating}</span>
        <span className="gray">({props.item.reviewCount}) * </span>
        <span className="gray">{props.item.country}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">from $ {props.item.price}</span> /person{" "}
      </p>
    </div>
  );
}
