import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';
import { MdEmail, MdPhone } from 'react-icons/md';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo + Company Info */}
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div className="company-info">
            <div className="company-name">SECURITY & ALLIED</div>
            <div className="company-name">SERVICES</div>
            <hr className="line" />
            <div className="iso-cert">ISO 9001:2015</div>
          </div>
        </div>

        {/* Right: Contact & Nav */}
        <div className="navbar-right">
          <div className="contact-line">
            <MdEmail className="icon" />
            <span>s3mdu@gmail.com</span>
            <MdPhone className="icon" />
            <span>+91 8838676725, 9843359988, 9384576725</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/service1">Service</a></li>
            <li><a href="/service2">Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
