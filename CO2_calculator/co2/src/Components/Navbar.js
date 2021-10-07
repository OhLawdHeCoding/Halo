import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styling/Navbar.css";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const showMenu = () => setMenuToggle(!menuToggle);
  const closeMenu = () => setMenuToggle(false);

  return (
    <>
      <nav className="nav-div">
        <div className="nav-container">
          <Link to="/" className="c02-logo" onClick={closeMenu}>
            <img src={Logo} />
          </Link>
          <div className="menu-logo" onClick={showMenu}>
            <i className={menuToggle ? "fas fa-times" : "fas fa-bars"} />
          </div>
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
