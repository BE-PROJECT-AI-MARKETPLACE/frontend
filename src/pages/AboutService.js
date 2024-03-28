import React, { useEffect, useState } from 'react';
import AboutServiceCard from '../components/AboutServiceCard.js';
import Backimg from '../assets/images/backimg.png';
import axios from 'axios';
const AboutService =()=> {

  const [service, setService] = useState([]);
  useEffect(() =>{
    const fetchService = async () =>{
      try{
        const response = await axios.get('api call');
        if(response.status === 200)
        {
          const service = response.data.data;
          console.log(service)
          setService(service);
        }
        else
        {
          console.log("Error getting service")
        }
      }
      catch(err){
        console.log(err)
    }
  }
  fetchService();
  }, []);

  return (
    <AboutServiceCard
      imageSrc={Backimg}
      heading1={service.service_name}
      heading2="Overview"
      text={service.service_overview}
      projectURL={service.service_details.projectURL}
      organization={service.service_provider}
      service={service.service_details.serviceID}
      contributors={service.service_details.service_contributors}
    />
  );
}

export default AboutService;