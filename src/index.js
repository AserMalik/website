import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import About from "./About.js";
import Navbar from "./Navbar.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <Navbar />
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
