import React from "react";
import "./styles.css";
import { Section } from "./App.js";

export default function About() {
  return (
    <div className="transformWrapper" id="intro">
      <Section id="intro">
        <p className="title">I'm Aser Malik.</p>
        <p className="subtext">
          (Pronounced <i>Aser</i> like <i>saucer</i>, <i>Aser saucer.</i>)
        </p>
        <p className="subtitle">Full-stack. Software.</p>
      </Section>
    </div>
  );
}

// for the second line, make a slider that cycles between words:
// react, c++, javascript, full-stack,

// im an aspiring software engineering based in Waterloo, ON with a
// focus on building and maintaining large, robust applications

//maybe a warning when you go above 150% like
// pls stop zooming in for your own -> its time to stop
// -> you brought this upon yourself
