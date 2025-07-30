import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#">Homes</a>
          <a href="#">Apartments</a>
          <a href="#">Resorts</a>
          <a href="#">Villas</a>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Cancellation options</a>
          <a href="#">Neighborhood Support</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Vrbo, an Expedia Group company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
