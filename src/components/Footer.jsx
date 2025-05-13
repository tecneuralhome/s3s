import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="S3S Security & Allied Services" />
        </div>
        <div className="footer-contact">
          <p>Contact us to popularise brand</p>
          <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>+(123) 456 7890</p>
          <p>your@emailaddress.com</p>
        </div>
        <div className="footer-navigation">
          <h3>Company</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-form">
          <h3>For any enquery</h3>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Your mail id" />
          <textarea placeholder="Lorem ipsum is simply"></textarea>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} S3S Security & Allied Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;