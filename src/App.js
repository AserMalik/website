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
  switch (props.type) {
    case "major":
      return (
        <div className="section-major">
          <h1>{props.title}</h1>
          {props.children}
        </div>
      );
    default:
      return (
        <div className="section-minor">
          <h1>{props.title}</h1>
          {props.children}
        </div>
      );
  }
};
//this should ideally be more modular but it's very small so I avoided it

Card = (title, cardDetails) => {
  const listCardDetails = Array.from(cardDetails).map(cardDetails => (
    <li key={cardDetails.toString()}>{cardDetails}</li>
  ));
  return (
    <div className="card">
      <div className="card-context-image" />
      <div className="card-context-info">
        <p className="card-title">{title}</p>
        <ul className="card-data">{listCardDetails}</ul>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Section title="Hello Work!">
        {Card("1work", test)}
        {Card("3", ["4", "2"])}
        {Card("3", ["4", "2"])}
        {Card("3", ["4", "2"])}
        {Card("3", ["4", "2"])}
        {Card("3", ["4", "2"])}
        {Card("3", ["4", "2"])}
      </Section>
      <Section title="projects">
        {Card("2", test)}
        {Card("4", "4321")}
      </Section>
    </div>
  );
}
