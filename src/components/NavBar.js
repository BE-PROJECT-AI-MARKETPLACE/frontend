import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/images/logo.png';

const NavBar = () => {

    const { user, logout } = useAuth();
    console.log(user);
    return (
        <nav className='navbar'>
            <div className='container'>
                    <div className='logo'>
                        <Link to='/'><img src={logo} alt='Logo' /></Link>
                    </div>
                <div className='nav-elements'>
                    <ul>
                        <li><Link to='/home' className='link'>Home</Link></li>
                        <li><Link to='/aimarketplace' className='link'>AI Models</Link></li>
                        <li><Link to='/aboutus' className='link'>About Us</Link></li>
                        {user ? ( // If user is logged in
                        <>
                            <ul>
                                <li> <Link to='/userdashboard'>User Profile</Link></li>
                                <li><a href="#" onClick={logout} className='link signUpButton'>Logout</a></li>

                            </ul>
                        </>
                    ) : ( // If user is not logged in
                    <ul>
                        <li><Link to='/signup' className='link signUpButton'>Sign Up</Link></li>
                        </ul>
                    )}
                    </ul>
                </div>
                {/* <div className='nav-elements'>
                    
                </div> */}
            </div>
        </nav>
    )
}

export default NavBar;
