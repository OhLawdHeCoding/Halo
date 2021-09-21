import React from "react";
import Pic from "../styling/aForest.jpg";
import "../styling/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Pic})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About us </h1>
        <p>
          We are a group of students that love sustainable food. We hope you do too. Join the movement today.
        </p>
      </div>
    </div>
  );
}

export default About;