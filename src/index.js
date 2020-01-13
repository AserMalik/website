import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import { section, card } from "./App.js";

var test = [7, "Hello World"];

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App>
    {card("1", test)}
    {card("3", "4")}
  </App>,
  rootElement
);
