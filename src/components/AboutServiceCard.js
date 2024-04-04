import React,{useState} from 'react';
import '../assets/css/AboutServiceCard.css';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
//props
const AboutServiceCard = (props) => {

  const { user } = useAuth();
  const { heading1 } = props;
  const handlePayment = async() => {
    try {
      console.log(props);
      console.log(heading1);
      const response = await axios.post('http://localhost:4000/pay', { amount: 1, service_name : heading1, payer: user.account });
      console.log(response);
      if (response.data.status === 200) {
        console.log(response.data.data);
        const hash = response.data.data;
        toast.success(response.data.message);
        const openLink = `http://127.0.0.1:8081/ipfs/${hash}`;
        console.log(openLink);
        window.open(openLink);
      } else {
        toast.error("Payment Unsuccessful");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
    <div className="cards">
      <div className="card">
        <div className="main-card-image-container">
          <img className="main-card-image" src={props.imageSrc} alt={props.heading1} />
        </div>
        <div className="main-card-text-container">
          <div className="main-card-text-content">
            <h1 className="main-card-heading1">{props.heading1}</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="main-card-text-container">
          <div className="main-card-text-content">
            <h4 className="main-card-heading2">{props.heading2}</h4>
            <p className="main-card-text">{props.text}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="main-card-text-content">
          <h4 className="main-card-project-heading2">Service Details</h4>
      </div>
      <table className="inner-table"> 
        <tr>
          <td className="main-card-project-field">Service URL:</td>
          <td className="main-card-text">{props.projectURL}</td>
        </tr>
        <tr>
          <td className="main-card-project-field">Organization ID:</td>
          <td className="main-card-text">{props.organization}</td>
        </tr>
        <tr>
          <td className="main-card-project-field">Contributors:</td>
          <td className="main-card-text">{props.contributors}</td>
        </tr>
    </table>
      </div>
      
    </div>
    <div className="cards">
      <button class="button-17" onClick={handlePayment}>Buy Service</button>
      <Toaster />
    </div>
  </div>
  );
};

export default AboutServiceCard;