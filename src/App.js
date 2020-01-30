import React from "react";
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
        <div className="section-major" id={props.id}>
          <h1 className="section-major-title">{props.title}</h1>
          {props.children}
        </div>
      );
    default:
      return (
        <div className="section-minor" id={props.id}>
          <h1 className="section-minor-title">{props.title}</h1>
          {props.children}
        </div>
      );
  }
};
//this should ideally be more modular but it's very small so I avoided it

Card = (title, cardDetails, image) => {
  const listCardDetails = Array.from(cardDetails).map(cardDetails => (
    <li key={cardDetails.toString()}>{cardDetails}</li>
  ));
  return (
    <div className="card">
      <div className="card-context-image-wrapper">
        <img className="card-context-image" src={image} alt="project" />
      </div>
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
      <Section title="./workXP">
        {Card("1work", test, "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
        {Card("3", ["4", "2"], "./pictures/rocket.jpg")}
      </Section>
      <Section title="./projects">
        {Card("2", test, "./pictures/rocket.jpg")}
        {Card("4", "4321", "./pictures/rocket.jpg")}
      </Section>
    </div>
  );
}
