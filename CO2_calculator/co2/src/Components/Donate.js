import React from 'react'
import Pic from "../assets/aForest.jpg";
import DonateButton from '../Components/DonateButton';
import "../styling/Donate.css";


function Donate() {
    return (
        <div className="donate">
        <div
          className="donateTop"
          style={{ backgroundImage: `url(${Pic})` }}
        ></div>
        <div className="donateBottom">
          <h1> Donate </h1>
          <p>
            One in ten people around the world do not have enough to eat everyday. 
            "Zero Hunger" is one of the 17 Sustainable Devlopment Goals that includes a 
            mission aiming at ending all forms of malnutrition by 2030.    
          </p>
          <DonateButton />
        </div>
        
      </div>
    );
}

export default Donate
