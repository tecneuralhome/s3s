import React from 'react';
import './WhyUsSection.css';
import img1 from '../assets/images/security-1.jpg';
import img2 from '../assets/images/security-2.jpg';
import { FaStar, FaMapMarkerAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';

function Whys3s() {
  return (
    <div className="why-section">
      <div className="why-box">
        <h2 className="why-title">Why <span>S3S</span></h2>
        <p className="why-desc">
          stands apart from its competitors by being a leader in <strong>professionalism, integrity, and confidence</strong><br />
          <span className="highlight">
            by providing one stop solution to all security and HR needs across the country.
          </span>
        </p>

        <div className="why-images">
          <img src={img1} alt="Security Team" className="image-left" />
          <img src={img2} alt="Security Parade" className="image-right" />
        </div>

        <ul className="why-features">
          <li><FaStar className="icon blue" /> Over 30 years of expertise</li>
          <li><FaMapMarkerAlt className="icon red" /> Pan India Presence</li>
          <li><FaUsers className="icon blue" /> Over 3000 well-trained, permanent staff</li>
          <li><FaShieldAlt className="icon red" /> Customized security solutions to over 200 corporate customers</li>
        </ul>
      </div>
    </div>
  );
}

export default Whys3s;