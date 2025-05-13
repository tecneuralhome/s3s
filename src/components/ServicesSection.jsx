import React from 'react';
import './ServicesSection.css'; // Keep the existing CSS file

import SecurityIcon from '../assets/images/security-main.jpg'; // Update with appropriate orange section icons
import ManagementIcon from '../assets/images/Component 19.png'; // Update with appropriate orange section icons
import TrainingIcon from '../assets/images/Component 20.png'; // Update with appropriate orange section icons

const ServiceSection = () => {
  return (
    <div className="services-section orange-bg"> {/* Add a class for orange background */}
      <div className="services-container">
        <h2>SECTORS WE FOCUS ON</h2> {/* Update the heading */}
        <div className="sector-cards-row"> {/* Rename the row for clarity */}
          <div className="sector-card"> {/* Keep or adjust card styles */}
            <img src={SecurityIcon} alt="Security Services" />
            <p>Security Services</p> {/* Update text */}
          </div>
          <div className="sector-card">
            <img src={ManagementIcon} alt="Facility Management" />
            <p>Facility Management</p> {/* Update text */}
          </div>
          <div className="sector-card">
            <img src={TrainingIcon} alt="Training Academy" />
            <p>Training Academy</p> {/* Update text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;