import React from 'react';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/images/backimg.png';
const Home = () => {
    return (
        <div>
        <section className='banner' id="home">
            <div class="container">
                <div class="pt-5 text-white">
                    <header class="py-5 mt-5">
                        <p class="lead mb-0">Welcome to our Blockchain-based decentralized platform, designed to provide secure, transparent, and user-friendly access to cutting-edge AI Models. </p>
                    </header>
                    <div class="py-1">
                        <p class="lead">Whether you're a startup looking to optimize operations or a seasoned enterprise aiming to stay ahead of the curve, our <br></br>
                        <strong class="font-weight-bold">AI MarketPlace </strong> caters to the diverse needs of users across industries.</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="text-white">
                    <header class="py-5 mt-5">
                        <h1 class="display-4">Our Vision</h1>
                        <p class="lead mb-0">Our vision is to democratize access to cutting-edge AI solutions through our decentralized platform. We aim to empower businesses of all sizes and industries with secure, transparent, and easy access to AI models. By leveraging blockchain technology, we ensure trust and integrity in the AI ecosystem. Our goal is to foster collaboration, innovation, and positive change, ultimately enabling businesses to thrive in the digital age.</p>
                        {/* <p class="lead mb-0">Snippet by
                            <a href="https://bootstrapious.com" class="text-white">
                                <u>Bootstrapious</u></a>
                        </p> */}
                    </header>
                        <p class="lead mb-lg-0">Join us as we pave the way towards a smarter, more connected future powered by AI.</p>     
                </div>
            </div>
            {/* <Col sm >
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img" />
                        </div>}
                </TrackVisibility>
                </Col> */}
        </section>
        </div>
    );
}

export default Home;