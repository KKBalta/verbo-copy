import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Vrbo Logo" />
      </div>
      <nav className="navigation">
        <a href="#">Stays</a>
        <a href="#">Flights</a>
        <a href="#">Cars</a>
        <a href="#">Packages</a>
        <a href="#">Things to do</a>
        <a href="#">Cruises</a>
      </nav>
      <div className="user-actions">
        <a href="#">List your property</a>
        <a href="#">Support</a>
        <a href="#">Sign in</a>
      </div>
    </header>
  );
};

export default Header;
