import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className='logo'>
                <Link to='/' className='link'>Logo</Link>
            </div>
            <div className='links'>
                <Link to='/aimarketplace'  className='link'>AI Marketplace</Link>
                <Link to='/aboutus' className='link'>About Us</Link>
            </div>
            <div className='signUp'>
                <Link to='/signup' className='link signUpButton'>Sign Up</Link>
            </div>
        </nav>
    )  
}

export default NavBar;