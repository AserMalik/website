import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import About from "./About.js";
import Navbar from "./Navbar.js";
import Contact from "./Contact.js";
import Socks from "./Socks.js";

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
      <Contact />
    </section>
    <footer>
      <Socks />
    </footer>
  </div>,
  rootElement
);
