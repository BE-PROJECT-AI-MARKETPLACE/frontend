import React from 'react';
import '../assets/css/RequestedServices.css'; // Import CSS file

function ServiceCard({ serviceTitle, domain, description, isCompleted }) {
  return (
    <div className="service-card">
      <div className="service-details">
        <table>
          <tbody>
            <tr>
              <td><strong>Title:</strong></td>
              <td><strong>Domain:</strong></td>
              <td><strong>Description:</strong></td>
              <td><strong>Status:</strong></td>
            </tr>
            <tr>
              <td>{serviceTitle}</td>
              <td>{domain}</td>
              <td>{description}</td>          
              <td>{isCompleted ? 'Completed' : 'Pending'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const RequestedServices = () => {
  const services = [
    {
      serviceTitle: "Service 1",
      domain: "Domain 1",
      description: "Description 1",
      isCompleted: true
    }
  ];

  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          serviceTitle={service.serviceTitle}
          domain={service.domain}
          description={service.description}
          isCompleted={service.isCompleted}
        />
      ))}
    </div>
  );
}

export default RequestedServices;
