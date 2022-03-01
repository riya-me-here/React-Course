import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.img}
        // rating={item.rating}
        // reviewCount={item.reviewCount}
        // country={item.country}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        // location={item.location}
        item={item}
        // {...item} this means spreading objects as prop, in this case we can directly write it as props.img instead of props.item.img etc in Card.js
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
