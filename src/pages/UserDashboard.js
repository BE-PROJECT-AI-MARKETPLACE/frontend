import React, { useEffect, useState } from 'react';
// import UserCard from '../components/UserCard.js';
import Backimg from '../assets/images/backimg.png';
import profile from '../assets/images/profile.png';
import Card from '../components/ServiceCards.js';
import '../assets/css/UserDashboard.css';
import axios from 'axios';
const UserDashboard =()=> {

  const [user, setUserDetails] = useState({
    name: '',
    email: '',
    servicesBought: [],
    servicesProvided: []
  });
  useEffect(() =>{
    const fetchService = async () =>{
      try{
        const response = await axios.get('api call');
        if(response.status === 200)
        {
          const userDetails = response.data.data;
          console.log(userDetails)
          setUserDetails(userDetails);
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
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
    <div className="services-section">
      <h2>Services Bought</h2>
      <p>Total: {user.servicesBought.length}</p>
        {user.servicesBought.map((service, index) => (
          <li key={index}>{service.name}</li>
        ))}

{user.servicesBought.length > 0 ? (
          user.servicesBought.map((item, index) => (

            <Card key={index + 1} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Available</p>
        )}

    </div>
    <div className="services-section">
      <h2>Services Provided</h2>
      <p>Total: {user.servicesProvided.length}</p>
      {user.servicesBought.length > 0 ? (
          user.servicesBought.map((item, index) => (

            <Card key={index + 1} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Available</p>
        )}
    </div>
  </div>
  );
}

export default UserDashboard;