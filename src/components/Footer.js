import React from 'react';
import '../assets/css/Footer.css'; // Import your CSS file for styling if needed
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSection">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna quis libero pharetra consectetur.</p>
                </div>

                <div className="footerSection">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/aimarketplace">AI MarketPlace</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footerBottom">
                <p>&copy; 2024 All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
