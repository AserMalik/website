import React from "react";
import "./styles.css";

export default function Navbar() {
  return (
    <div className="NavbarWrapper">
      <ul className="Navbar">
        <li className="navItem">About</li>
        <li className="navItem">Experience</li>
        <li className="navItem">Contact</li>
        <button className="default-button">Resume</button>
      </ul>
    </div>
  );
}
