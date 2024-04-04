import React from 'react';
import '../assets/css/Footer.css';
// import { icon, logo } from './assets';
// import { FaInstagram,FaDribbble,FaXTwitter,FaYoutube } from "react-icons/fa6";

const Footer = () => {

    return (
        <div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">AI MarketPlace © 2024</p>
        </footer>
        </div>
    )
}

export default Footer