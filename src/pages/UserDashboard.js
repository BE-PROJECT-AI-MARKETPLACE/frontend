import React, { useEffect, useState } from 'react';
// import UserCard from '../components/UserCard.js';
import Backimg from '../assets/images/backimg.png';
import profile from '../assets/images/profile.png';
import Card from '../components/CardDashboard.js';
import '../assets/css/UserDashboard.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.js';


const UserDashboard =()=> {

  const { user } = useAuth();
  
  const [userDetails, setUserDetails] = useState({});
  const [servicesBought, setServicesBought] = useState([]);
  const [servicesProvided, setServicesProvided] = useState([]);
  useEffect(() =>{
    const fetchService = async () =>{
      try{
        const response = await axios.get(`http://localhost:4000/getUserDetails/${user.account}`);
        if(response.status === 200)
        {
          console.log(response.data.data);
          setUserDetails(response.data.data.User);
          setServicesBought(response.data.data.userServicesBought);
          setServicesProvided(response.data.data.ownerServices);
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
    <div className="dashboard-container">
    <div className="dashboard-header">
      <h1>User Dashboard</h1>
    </div>
    <div className="user-details">
        <h5><strong>Name:</strong> {userDetails.name}</h5>
        <h5><strong>Email:</strong> {userDetails.email}</h5>
    </div>
    <div className="services-sections-container">
    <div className="services-section">
      <h2>Services Bought</h2>
        <p>Total: {servicesBought.length}</p>

        {servicesBought.length > 0 ? (
          servicesBought.map((item, index) => (

            <Card key={index + 1} id={item.service_details.serviceID} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Bought</p>
        )}

    </div>
    
    <div className="services-section">
      <h2>Services Provided</h2>
      <p>Total: {servicesProvided.length}</p>
        {servicesProvided.length > 0 ? (
          servicesProvided.map((item, index) => (

            <Card key={index + 1} id={item.service_details.serviceID} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Provided</p>
        )}
    </div>
    </div>
  </div>
  );
}

export default UserDashboard;