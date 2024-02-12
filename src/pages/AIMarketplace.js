import React,{useEffect,useState} from 'react'
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Cards.js';
import profile from '../assets/images/profile.png';
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
  },[]);

  return (
      <div>
        {/* <Button variant="secondary" href = "RequestForm.js">Secondary</Button>{' '} */}
      <Link to='/requestform' className='link'>Request Form</Link>      
      

      {services.length > 0 ? (
        services.map((item, index) => (
          <Card key = {index+1} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />
        ))
      ) : (
         <p>No Services Available</p> 
      )}

         
      </div>
  )
}

export default AIMarketplace;
