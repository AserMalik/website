import React from "react";
//import ReactDOM from "react-dom";

import "./styles.css";

export var Section;
export var Card;

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

Section = props => {
  return (
    <div className="section">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

Card = (title, cardDetails) => {
  const listCardDetails = Array.from(cardDetails).map(cardDetails => (
    <li key={cardDetails.toString()}>{cardDetails}</li>
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

export default function App() {
  return (
    <div className="App">
      <Section title="Hello World!">
        {Card("1", test)}
        {Card("3", ["4", "2"])}
      </Section>
      <Section title="Hello World!">
        {Card("2", test)}
        {Card("4", "4321")}
      </Section>
      <Section title="Hello World!">
        {Card("5", test)}
        {Card("6", "4321")}
      </Section>
    </div>
  );
}
