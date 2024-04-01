import React from 'react';
import '../assets/css/AboutServiceCard.css';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
//props
const AboutServiceCard = (props) => {

  const { user } = useAuth();

  const handlePayment = async() => {
    try {
      const response = await axios.post('http://localhost:4000/pay', { amount: 1, paymentID: 1, payer: user.account });
      console.log(response);
      if (response.data.status === 200) {
        toast.success(response.data.message);


      } else {
        toast.error("Payment Unsuccessful");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="cards">
      <div className="card">
        <div className="card-image-container">
          <img className="card-image" src={props.imageSrc} alt={props.heading1} />
        </div>
        <div className="card-text-container">
          <div className="card-text-content">
            <h1 className="card-heading1">{props.heading1}</h1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-text-container">
          <div className="card-text-content">
            <h4 className="card-heading2">{props.heading2}</h4>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-project-container">
          <div className="card-project-content">
            <h4 className="card-project-heading">Project Details</h4>
            <div className="card-project-field">
              <p className="card-text">Project URL</p>
              <p className="card-text">{props.projectURL}</p>
            </div>
            <div className="card-project-field">
              <p className="card-text"> Organization ID</p>
              <p className="card-text">{props.organization}</p>
            </div>
            <div className="card-project-field">
              <p className="card-text">Contributors</p>
              <p className="card-text">{props.contributors}</p>
            </div>
          </div>
        </div>

      </div>
      <button onClick={ handlePayment }>Pay</button>
    </div>

  );
};

export default AboutServiceCard;