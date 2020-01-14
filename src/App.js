import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Button } from "antd";
import "./styles.css";

export var section;
export var card;

var test = [7, "Hello World"];
/*context data
//////////////
//////////////
//////////////
//////////////
//////////////
//////////////
//////////////
////////////*/

export default function App() {
  return (
    <div className="App">
      <Button type="primary">Hello</Button>
      {section("Hello World!")}
      {card("1", test)}
      {card("3", "4321")}
      {section("Hello World!")}
      {card("1", test)}
      {card("3", "4321")}
      {section("Hello World!")}
      {card("1", test)}
      {card("3", "4321")}
    </div>
  );
}

section = title => {
  return (
    <div className="section">
      <h1>{title}</h1>
    </div>
  );
};

card = (title, cardDetails) => {
  const listCardDetails = Array.from(cardDetails).map(cardDetails => (
    <li>{cardDetails}</li>
  ));
  return (
    <div className="card">
      <div className="card-context-image" />
      <div className="card-context-info">
        <p className="card-title">{title}</p>
        <ul className="card-subtitle">{listCardDetails}</ul>
      </div>
    </div>
  );
};
