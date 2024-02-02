import React from 'react';
import AboutContent from '../components/AboutContent';
import Vision from '../components/Vision';

const Home = () => {
    const func = () => {
        const address1 = process.env.REACT_APP_AUTHENTICATION_CONTRACT_ADDRESS;
        const address2 = process.env.REACT_APP_AISERVICE_CONTRACT_ADDRESS;
        console.log(address2);
        console.log(address1);
    }
    
    return (
        <div>
            <AboutContent />
            <Vision />
            <button onClick={func}>Button</button>
        </div>
    )
}

export default Home;