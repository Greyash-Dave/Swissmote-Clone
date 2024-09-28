import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsVisible(visible);
      setIsScrolled(currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navbar-container ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'glass-effect' : ''}`}>
      <div className="navbar-elements">
        <div className="navbar-logo">
          <img src="/swissmote_logo.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <a>About Us</a>
          <a>Team Swissmote</a>
          <a>FAQ</a>
          <a>Recruitment Options</a>
          <button className="hire-button">
            Hire Now 
            <img src="/arrow.svg" alt="arrow" className="arrow-icon" />
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;