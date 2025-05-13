import React from 'react';
import './FeaturesSection.css';
import { FaShieldAlt, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import featureImage from '../assets/images/image 24.png'; 

function FeaturesSection() {
  return (
    <div className="features-section-v2">
      <div className="features-container">
        <div className="feature-item-v2">
          <FaShieldAlt className="feature-icon-v2" />
          <h3>Trained Security Personnel</h3>
          <p>Professionally trained and verified security personnel.</p>
        </div>
        <div className="feature-item-v2">
          <FaUsers className="feature-icon-v2" />
          <h3>Client-Centric Approach</h3>
          <p>Dedicated services tailored to meet your specific needs.</p>
        </div>
        <div className="feature-item-v2">
          <FaClock className="feature-icon-v2" />
          <h3>24/7 Support</h3>
          <p>Round-the-clock monitoring and immediate response.</p>
        </div>
        <div className="feature-item-v2">
          <FaMapMarkerAlt className="feature-icon-v2" />
          <h3>Wide Coverage</h3>
          <p>Services available across various locations.</p>
        </div>
        <div className="feature-image-container">
          <img src={featureImage} alt="Security Services" className="feature-image-v2" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;