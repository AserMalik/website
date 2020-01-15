import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <p className="page-title">Title</p>
    <App />
  </div>,
  rootElement
);
