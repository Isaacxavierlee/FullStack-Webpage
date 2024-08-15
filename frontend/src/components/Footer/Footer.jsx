import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img 
            src={assets.logo} 
            alt="Majus Enterprise Logo" 
            style={{ width: '100px', height: '100px', objectFit: 'contain' }} 
          />
          <p className="footer-description">Majus Enterprise Delighting You Always.</p>
          <div className='footer-social-icons'>
            <img 
              src={assets.facebook_icon} 
              alt="Facebook" 
              className="social-icon" 
            />
            <img 
              src={assets.twitter_icon} 
              alt="Twitter" 
              className="social-icon" 
            />
            <img 
              src={assets.linkedin_icon} 
              alt="LinkedIn" 
              className="social-icon" 
            />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Let's Get In Touch</h2>
          <ul>
            <li>+65 6766-5301</li>
            <li><a href="mailto:MajusEnterprise@gmail.com">MajusEnterprise@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr className='footer-divider'/>
      <p className='footer-copyright'>Copyright 2024 @ Majus Enterprise - All Rights Reserved</p>
    </div>
  );
}

export default Footer;
