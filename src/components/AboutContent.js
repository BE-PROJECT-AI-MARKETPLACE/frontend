import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import '../assets/css/AboutContent.css';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/images/backimg.png';
const AboutContent = () => {
    return (
        <section className='banner' id="home">
            <Container>
               <Row>
                    <Col sm>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>AI MarketPlace</h1>
                                    <p>Welcome to our Blockchain-based decentralized platform, designed to provide secure,      transparent, and user-friendly access to cutting-edge AI Models. Our platform, known as the AI MarketPlace, offers a revolutionary solution to businesses seeking effective problem-solving through artificial intelligence.
                                        At our platform, users can seamlessly navigate through a diverse range of AI Models tailored to address specific business challenges. Leveraging the power of blockchain technology, we ensure the highest standards of security and transparency, enabling users to trust the integrity of the data and models available on our platform.

                                        With a commitment to facilitating ease of access, our platform streamlines the process of discovering, accessing, and implementing AI solutions. Whether you're a startup looking to optimize operations or a seasoned enterprise aiming to stay ahead of the curve, our AI MarketPlace caters to the diverse needs of users across industries.

                                        Join us on this journey towards innovation and transformation as we redefine the landscape of problem-solving through AI. Explore our AI MarketPlace today and unlock the potential of artificial intelligence for your business.
</p>

                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col sm >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                        </Col>
                 </Row>
            </Container>
            </section>
        
    );
}

export default AboutContent;