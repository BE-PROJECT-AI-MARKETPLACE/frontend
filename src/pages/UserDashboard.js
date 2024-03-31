import React, { useEffect, useState } from 'react';
// import UserCard from '../components/UserCard.js';
import Backimg from '../assets/images/backimg.png';
import profile from '../assets/images/profile.png';
import Card from '../components/ServiceCards.js';
import '../assets/css/UserDashboard.css';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.js';


const UserDashboard =()=> {

  const { user } = useAuth();
  
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    // servicesBought: [],
    // servicesProvided: []
  });
  useEffect(() =>{
    const fetchService = async () =>{
      try{
        const response = await axios.get(`http://localhost:4000/getUserDetails/${user.account}`);
        if(response.status === 200)
        {
          console.log(response.data.data);
          setUserDetails(response.data.data);
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
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
    </div>
    {/* <div className="services-section">
      <h2>Services Bought</h2>
        <p>Total: {userDetails.servicesBought.length}</p>
        {/* {user.servicesBought.map((service, index) => (
          <li key={index}>{service.name}</li>
        ))} */}

        {/* {userDetails.servicesBought.length > 0 ? (
          userDetails.servicesBought.map((item, index) => (

            <Card key={index + 1} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Bought</p>
        )} */}

    {/* </div>
    <div className="services-section">
      <h2>Services Provided</h2>
      <p>Total: {user.servicesProvided.length}</p>
        {userDetails.servicesProvided.length > 0 ? (
          userDetails.servicesProvided.map((item, index) => (

            <Card key={index + 1} title={item.service_name} imageurl={profile} body={item.service_overview} logo={profile} />

          ))
        ) : (
          <p>No Services Provided</p>
        )}
    </div> */}
  </div>
  );
}

export default UserDashboard;