import React from 'react';
import './HeroSection.css';
import banner from '../assets/images/banner.png';

function HeroSection() {
  return (
    <div className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <div className="overlay">
        <div className="hero-content">
          <h1>
            LEADING CORPORATE AND INDUSTRIAL<br />
            <span className="highlight">SECURITY SERVICE</span>
          </h1>
          <p className="hero-subtitle">SECURING & ENSURING THE SAFETY OF EVERYTHING</p>
          <p className="hero-description">
            One-stop manpower security management services to suit all industrial and corporate security needs.
          </p>
          <button className="hero-button">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
