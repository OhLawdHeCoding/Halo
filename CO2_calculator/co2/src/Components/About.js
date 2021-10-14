import React from "react";
import Pic from "../assets/aForest.jpg";
import "../styling/About.css";
import { Link } from "react-router-dom";



//this file is responsible for the about page located in App.js
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
          We are students at Chalmers University Of Technology in Gothenburg and
          we want to raise awareness on how production and processing of food
          impact the climate. We have therefore created a Co2-calculator where
          you can search through our database for differents foods and find
          their carbon footprint. You can create your own list of items with the
          grocerys you plan to use when cooking or while shopping. We believe
          that with further knowledge about what we're eating and how
          environmentally friendly different products are we can drastically
          reduce our footprint only with small changes in our consumption.{" "}
          <br />
          <br /> The data that we use are collected from 38,700 farms and 1600
          processors. It takes also into account the packaging and retailers and
          the data is then presented as the average gas emission of carbon
          dioxide equivalents (kgCO₂eq) per kilogram.
          <br />
          <br /> With the development of transport systems and a more industrial
          supply structure in recent centuries the link between producers and
          consumers has become ever more distant. While helping society in so
          many ways, our more comfortable lifestyle has created a gap with a
          lack of knowledge that we believe is problematic for our future battle
          for better climate.
          <br />
          <br />
          <p style={{fontSize: '80%'}}>
          <small>
          Data: Poore, J. and Nemecek, T. (2018). Reducing food’s environmental impacts through producers and consumers. 
           Science, [online] 360(6392), pp.987–992. <td onClick={() => 
            window.open('https://science.sciencemag.org/content/360/6392/987')}>
              https://science.sciencemag.org/content/360/6392/987
            </td>
          </small>
          </p>
          <br />
         
        </p>
       
      </div>
    </div>
  );
}

export default About;
