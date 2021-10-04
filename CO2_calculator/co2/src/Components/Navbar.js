import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
 
 
 
function Navbar() {
 
    return (
        <div className='navbar'>
            <div className='left'>
            <Link to='/home'><img src={Logo}/></Link>
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