import React, { Component } from "react";
import ReactDOM from "react-dom";

export var section;
export var card;

export default function App() {
  return <div className="App" />;
}

section = title => {
  return (
    <div className="section">
      <h1>{title}</h1>
    </div>
  );
};

card = (title, type) => {
  return (
    <div className="card">
      <div className="card-context-image" />
      <div className="card-context-info">
        <p className="card-title">{title}</p>
        <ul className="card-subtitle">
          <li>{type[0]}</li>
          <li>{type[1]}</li>
        </ul>
      </div>
    </div>
  );
};
