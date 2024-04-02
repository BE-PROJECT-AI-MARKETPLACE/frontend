import React from 'react';
import '../assets/css/Footer.css'; // Import your CSS file for styling if needed
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footerSection">
                    <h3>About Us</h3>
                    <p>We are a team of ambitious final-year CE undergraduate students from PICT College, Pune, driven by our passion for blockchain technology and our desire to make a meaningful impact. As blockchain enthusiasts, we are committed to exploring the potential of this revolutionary technology to address real-life problems and drive positive change in society. With a strong foundation in development and a keen interest in innovation, we are constantly pushing the boundaries to create innovative solutions that have the power to transform industries and improve lives. Our journey is fueled by our collective drive to learn, grow, and make a difference, and we are excited to present you AI Marketplace as we work towards building a brighter future through blockchain innovation.</p>
                </div>

                <div className="footerSection">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/aimarketplace">AI MarketPlace</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
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
