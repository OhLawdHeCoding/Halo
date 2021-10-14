import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styling/Navbar.css";

/* 
The navigation bar appears at the top of the screen on all pages. 
It contains a clickable logotype to the left and links to the three different
pages to the right. It uses 'React router dom' to navigate the different pages. 
The output is different for screens with width > 960 px where the links appear 
by clicking a hamburger menu-icon (for mobile). A popup-menu then appears.
It gets called by App.js.
It returns the Navbar. 
*/
function Navbar() {
  //Variable with hook used to change design between desktop and mobile.
  //setMenuToggle is changed when using variables showMenu and closeMenu.
  const [menuToggle, setMenuToggle] = useState(false);

  //function that sets menuToggle to true. Is called when clicking on the
  //hamburger menu-icon
  const showMenu = () => setMenuToggle(!menuToggle);

  //function that sets menuToggle to false and closes the menu.
  //It's called when clicking on a page link in the pop-up navigation drawer.
  const closeMenu = () => setMenuToggle(false);

  return (
    <>
      <nav className="nav-div">
        <div className="nav-container">
          <Link to="/" className="c02-logo" onClick={closeMenu}>
            <img src={Logo} />
          </Link>
          <div className="menu-logo" onClick={showMenu}>
            {/*Checks menuToggle and provide different icon the depending on value*/}
            <i className={menuToggle ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/*Checks menuToggle and adds css-styling depending on value*/}
          <ul className={menuToggle ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/donate" className="nav-links" onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
