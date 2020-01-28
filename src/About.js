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
        <p className="subtitle">I like to learn.</p>
      </Section>
    </div>
  );
}
