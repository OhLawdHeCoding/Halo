import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styling/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {
    
    const [openLinks, setOpenLinks] = useState(false);
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)

    };
 
    return (
        <div className='navbar'>
            <div className='left' id={openLinks ? 'open' : 'close'}>
            <Link to='/home'><img src={Logo}/></Link>
            <div className='hiddenLinks'>
                 <Link to='/'> Home</Link>
                 <Link to='/about'> About</Link>
                 <Link to='/donate'> Donate</Link>

            </div>
            </div>
            <div className='right'>
                <Link to='/'> Home</Link>
                <Link to='/about'> About</Link>
                <Link to='/donate'> Donate</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
 
            
 
            
 
        </div>
        
         
    );
}
 
export default Navbar;