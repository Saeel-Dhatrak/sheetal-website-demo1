import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace with logo image or text */}
        <span>Finance with <strong>Sheetal</strong></span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#courses">Services</a>
        <a href="#guides">Guides</a>
        <button className="cta-button">Login</button>
      </nav>
    </header>
  );
}

export default Header;
