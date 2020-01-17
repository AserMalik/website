import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import About from "./About.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <section>
      <About />
    </section>
    <section>
      <App />
    </section>
    <section>
      <p className="page-title">Title</p>
    </section>
  </div>,
  rootElement
);
