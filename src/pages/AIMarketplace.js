import React, {
  useEffect,
  useState
} from 'react'
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
          <h3>No Services Available</h3>
        )}

      </div>
      <div className="page">
      <Link to='/requestform'  style={{ textDecoration: 'none' }} >
      <div className='content-item'>
        <h2 >Seeking an alternative AI solution?</h2>
        <h6>We're eager to learn about your specific AI needs!</h6>
      </div>
      </Link>
      <Link to="/viewrequests" style={{ textDecoration: 'none' }}>
      <div className='content-item'>
          <h2>Looking for a Contribution?</h2>
          <h6>View all service requests and show your skills. </h6>
        </div>
      </Link>
    </div>
    </div>
  )
}

export default AIMarketplace;
