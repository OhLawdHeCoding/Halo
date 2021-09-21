import React from 'react';
import Logo from '../styling/logo.png';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
 
 
 
function Navbar() {
 
    return (
        <div className='navbar'>
            <div className='left'>
            <img src={Logo}/>
            </div>
            <div className='right'>
                <Link to='/'> Home</Link>
                <Link to='/about'> About</Link>
                <Link to='/donate'> Donate</Link>
            </div>
 
            
 
            
 
        </div>
        
         
    );
}
 
export default Navbar;