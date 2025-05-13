import React from 'react';
import './WhyUsSection.css';
import subImg1 from '../assets/images/security-1.jpg';
import subImg2 from '../assets/images/security-2.jpg';
import tickIcon from '../assets/images/tick-icon.png';

const WhyUsSection = () => {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-left">
          <div className="image-stack">
            <img src={subImg1} alt="Security 1" className="stack-image bottom" />
            <img src={subImg2} alt="Security 2" className="stack-image top" />
          </div>
        </div>
        <div className="whyus-right">
          <div className="text-box">
            <h2 className="whyus-title">
              Why <span className="highlight">S3S</span>
            </h2>
            <p className="subtitle">
              stands apart from its competitors by being a leader in professionalism, integrity, and confidence
            </p>
            <p className="highlight-text">
              by providing one stop solution to all security and HR needs across the country.
            </p>
            <ul className="points-list">
              <li><img src={tickIcon} alt="tick" /> Over 30 years of expertise</li>
              <li><img src={tickIcon} alt="tick" /> Pan India Presence</li>
              <li><img src={tickIcon} alt="tick" /> Over 3000 well-trained, permanent staff</li>
              <li><img src={tickIcon} alt="tick" /> Customized security solutions to over 200 corporate customers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
