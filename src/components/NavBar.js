import React from 'react';
import '../assets/css/NavBar.css';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {

    const { user } = useAuth();

    return (
    <div>
    <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container"><a href="/" class="navbar-brand text-uppercase font-weight-bold">AI MarketPlace</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>            
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="/" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                    <li class="nav-item"><a href="/aboutus" class="nav-link text-uppercase font-weight-bold">About Us</a></li>
                    <li class="nav-item"><a href="/aimarketplace" class="nav-link text-uppercase font-weight-bold">AI Models</a></li>
                    {user ? ( // If user is logged in
                    <>
                        <li class="nav-item"><a href="/userdashboard" class="nav-link text-uppercase font-weight-bold">Logout</a></li>
                    </>
                ) : ( // If user is not logged in
                    <li class="nav-item"><a href="/signup" class="nav-link text-uppercase font-weight-bold">Sign Up</a></li>
                )}
                
                </ul>
            </div>
        </div>
    </nav>
</header>

</div>
    )  
}

export default NavBar;