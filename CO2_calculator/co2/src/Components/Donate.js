import React from "react";
import Pic from "../assets/aForest.jpg";
import DonateButton from "../Components/DonateButton";
import "../styling/Donate.css";

//this file is responsible for the donate page located in App.js
function Donate() {
  return (
    <div className="donate">
      <div
        className="donateTop"
        style={{ backgroundImage: `url(${Pic})` }}
      ></div>
      <div className="donateBottom">
        <h1>Donate</h1>
        <p>
          One in ten people around the world do not have enough to eat everyday.
          "Zero Hunger" is one of the UN's 17 Sustainable Devlopment Goals that
          includes a mission aiming at ending all forms of malnutrition by 2030.
          After decades of decline, the number of people suffering from hunger
          began to slowly increase again in 2015. This needs to change!{" "}
          <br></br>
          <br></br> The World Food Programme is the largest humanitarian
          organization in the world and provides life-saving food and nutrition
          assistance to people living in poor conditions and in countries
          affected by conflict. There are currently over 810 million people that
          do not have enough food and according to recent estimates, 41 million
          people are at risk of sliding into famine. In 2021 their mission is
          more important than ever and hugely challenging with increasing
          climate change, inequality and problematic socio-economic consequenses
          of the Covid-19 pandemic.<br></br>
          <br></br>You can become a monthly donator or do a one-time donation.
          Click the button below to find out more.<br></br>
        </p>
        <p style={{ fontSize: "80%" }}>
          <small>
            The UN World Food Programme is a 100% voluntarily funded
            organization. For every $1 you give, 64 cents goes directly to
            programmes supporting hungry people. Right now, 2 cents is used to
            process your donation and 6 cents helps run WFP and their programmes.
            28 cents goes towards raising the next $1 (which under their ten-year
            plan will fall – averaging out at 22 cents between 2020-2030).
          </small>
          <br />
          <br />
        </p>
        <DonateButton />
        <p>
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default Donate;
