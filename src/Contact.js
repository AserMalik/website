import React from "react";
import "./styles.css";
import { Section } from "./App.js";

export default function Contact() {
  return (
    <div className="Contact">
      <Section type="major" title="Contact Me">
        <p className="base-text">
          If you'd like to contact me about work opportunities or internships,
          or if you'd just like to learn more about me, my email is
          ah3malik@uwaterloo.ca
        </p>
      </Section>
    </div>
  );
}
