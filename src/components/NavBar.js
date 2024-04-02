import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {

    const { user, logout } = useAuth();

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
                {user ? ( // If user is logged in
                    <>
                        <Link to='/userdashboard'>{user.email}</Link>
                        <button onClick={logout} className='link signUpButton'>Logout</button>
                    </>
                ) : ( // If user is not logged in
                    <Link to='/signup' className='link signUpButton'>Sign Up</Link>
                )}
            </div>
        </nav>
    )  
}

export default NavBar;