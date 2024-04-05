import React from 'react';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';
// import { icon, logo } from './assets';
// import { FaInstagram,FaDribbble,FaXTwitter,FaYoutube } from "react-icons/fa6";

const Footer = () => {

    return (
        <div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><Link to="/">Home</Link></li>
                <li class="list-inline-item"><Link to="/">Services</Link></li>
                <li class="list-inline-item"><Link to="/">About</Link></li>
                <li class="list-inline-item"><Link to="/">Terms</Link></li>
                <li class="list-inline-item"><Link to="/">Privacy Policy</Link></li>
            </ul>
            <p class="copyright">AI MarketPlace © 2024</p>
        </footer>
        </div>
    )
}

export default Footer