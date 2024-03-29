import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from '../components/ServiceCards.js';
import profile from '../assets/images/profile.png';
import '../assets/css/AIMarketplace.css';
import axios from 'axios';



const AIMarketplace = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getServices');
        if (response.status === 200) {
          const service = response.data.data;
          console.log(services);
          setServices(service);


        } else {
          console.log("Error displaying Services");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchServices();
  }, []);

  return (
    <div>

      <div className='flex-container'>

        {services.length > 0 ? (
          services.map((item, index) => (

            <Card key={index + 1} id={item.service_details.serviceID} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Available</p>
        )}

      </div>
      <div className="pagefooter">
        <div>
          <h1 >Looking for a different AI Service?</h1>
          <p>If you have a need for a specific AI service, we would love to know!</p>
          <Link to='/requestform' role='button' className='link'>Request Form</Link>
        </div>
        <div>
          <h1 >Looking for a Contribution?</h1>
          <p>View all service requests and show your skills if possible </p>
          <Link to='/viewrequests' role='button' className='link'>View Request</Link>
        </div>
      </div>
    </div>
  )
}

export default AIMarketplace;
