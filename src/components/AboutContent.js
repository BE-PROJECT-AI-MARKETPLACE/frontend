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
                                    <p>I'm a Fourth Year student currently pursuing a Bachelor's Degree in Computer Engineering at the Pune Institute of Computer Technology. I'm an open minded person and love to connect & interact with people. I’m currently exploring Blockchain Technology. I'm really intrested in DSA, Competitive Programming and Cyber Security. Apart from my studies, I love playing cricket, watching movies, playing piano & listening to music.</p>

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