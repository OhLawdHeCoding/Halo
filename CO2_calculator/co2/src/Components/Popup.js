import React, { useState } from "react";
import "../styling/Popup.css";

//this file is responsible for the popup help button located in Homepage.js

export default function Popup() {
  const [popup, setPopup] = useState(false);//state of popup is false from beginning

  const togglePopup = () => {
    setPopup(!popup);//toggles useState Hook when button is clicked
  };

  if(popup) {
    document.body.classList.add('active-popup')//prevent scrolling when popup is open
  } else {
    document.body.classList.remove('active-popup')
  }

  /*

  Clicking the help/close button or the overlay (outside the popup-window)
  triggers the function togglePopup and changes useState.

  'popup &&' is used to render the popup conditionally.
  If popup is true, the popup is returned. If not true, nothing is returned. 

  */

  return (
    <>
      <button onClick={togglePopup} className="btn-popup">
        Help  
      </button>

      {popup && (
        <div className="popup">
          <div onClick={togglePopup} className="overlay"></div>
          <div className="popup-content">
            <h2>Welcome!</h2>
            <p>
              <p>To use the CO2 calculator: </p>
              
              Either scroll in the product list or search 
              for the item/items you want in the searchbox and click on it. The search function
              is smart so you could for instance search "Salmon" and find the "Farmed fish"-category.
              If you want several of the same item, click on it as many time as you would like. 

              <p>
              On the right hand side of the list you 
              can see your chosen items. To remove an item/decrease the amount of an item, 
              press -1. Similarly, to add more of an item, press +1. 
              
              <p>Finally, above your list of selected items you can see the total CO2
                -equivalent in kg and if you press it, its breakdown in a graph.</p>

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