import React, {
  useEffect,
  useState
} from 'react'
// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ServiceCards.js';
import profile from '../assets/images/profile.png';
import '../assets/css/AIMarketplace.css';
import axios from 'axios';



const AIMarketplace = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
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

  const handleRequest = ()=>{
    navigate('/requestform')
  }

  const handleViewRequest = () => {
    navigate('/viewrequests')
  }
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

      <div className='cards'>
        <div className="card" onClick={handleRequest}>
            <h1 >Seeking an alternative AI solution?</h1>
            <h6>We're eager to learn about your specific AI needs!</h6>
            {/* <Link to='/requestform' role='button'>Request Form</Link> */}
        </div>
        <div className="card" onClick={handleViewRequest}>      
            <h1 >Looking for a Contribution?</h1>
            <h6>View all service requests and show your skills if possible </h6>
            {/* <Link to='/viewrequests' role='button' style={{ color: 'blue', textDecoration: 'none' }}>View Request</Link> */}
        </div>
      </div>
    </div>
  )
}

export default AIMarketplace;
