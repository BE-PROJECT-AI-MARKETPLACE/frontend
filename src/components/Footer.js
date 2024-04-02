import React from 'react';

const Footer = () => {

    return (

        <footer class="py-3 my-4">
            <div class="container">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2" style={{color: "white"}}>Home</a></li>
      <li class="nav-item" ><a href="/aboutus" class="nav-link px-2" style={{color: "white"}} >About Us</a></li>
      <li class="nav-item"><a href="/aimarketplace" class="nav-link px-2" style={{color: "white"}}>Models</a></li>
      <li class="nav-item"><a href="/signup" class="nav-link px-2" style={{color: "white"}}>Sign Up</a></li>
      <li class="nav-item"><a href="/signin" class="nav-link px-2" style={{color: "white"}}>Sign In</a></li>
    </ul>
</div>
        </footer>
    );
}

export default Footer;
