import React, { useState } from "react";
import "../styling/Popup.css";

export default function Popup() {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  if(popup) {
    document.body.classList.add('active-popup')
  } else {
    document.body.classList.remove('active-popup')
  }

  return (
    <>
      <button onClick={togglePopup} className="btn-popup">
        Help
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content">
            <h2>Welcome Facebook-Mom</h2>
            <p>
              <p>To use the CO2 calculator: </p>
              
              Either scroll in the product list or search 
              for the item/items you want in the searchbox and click on it. If you want several of the same item, 
              click on it as many time as you would like. 

              <p>
              On the right hand side of the list you 
              can see your chosen items. To remove an item/decrease the amount of an item, 
              press -1. Similar, to add more of an item, press +1. 
              
              <p>Finally, to calculate the total CO2, press "calculate".</p>

              </p>
              
             
              
            </p>
            <button className="close-popup" onClick={togglePopup}>
              X
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}