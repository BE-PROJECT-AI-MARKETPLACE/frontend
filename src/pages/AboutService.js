import React from 'react';
import AboutServiceCard from '../components/AboutServiceCard.js';
import Backimg from '../assets/images/backimg.png';

const AboutService =()=> {

  return (
    <AboutServiceCard
      imageSrc={Backimg}
      heading1="Service Title"
      heading2="Overview"
      text="This is the card's main text content."
      projectURL="xyz"
      organization="1"
      service="service id"
      contributors="aditi"
    />
  );
}

export default AboutService;