import React from 'react';
import '../assets/css/AboutServiceCard.css';
//props
const AboutServiceCard = (props) => {
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
  </div>

  );
};

export default AboutServiceCard;