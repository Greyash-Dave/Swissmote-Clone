import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Set image to visible after a short delay to trigger the animation
    const timer = setTimeout(() => setImageVisible(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const calculateOpacity = () => {
    const fadeStart = 0;
    const fadeEnd = 300;
    const opacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1);
    return opacity;
  };

  const calculateLogoSize = () => {
    const shrinkStart = 0;
    const shrinkEnd = 300;
    const maxSize = 100;
    const minSize = 20;
    const shrinkFactor = Math.max(minSize, maxSize - ((scrollPosition - shrinkStart) / (shrinkEnd - shrinkStart)) * (maxSize - minSize));
    return `${shrinkFactor}%`;
  };

  const heroOpacity = calculateOpacity();
  const logoSize = calculateLogoSize();

  return (
    <div className="hero-container">
      <div 
        className="hero-elements"
        style={{ opacity: heroOpacity }}
      >
        <div className="hero-title">
          <h1>Hire Remote Superstars</h1>
          <h2>Experience Their Work Before You Hire</h2>
          <p>We source thousands of candidates, have them complete your 'test project,' and deliver only the top talent, ready to join your team.</p>
          <button className="hire-button">
            Hire Now 
            <img src="/arrow.svg" alt="arrow" className="arrow-icon" />
          </button>
        </div>
        <div className={`hero-image ${imageVisible ? 'visible' : ''}`}>
          <img src='/hero-img.webp' alt="Hero" />
        </div>
      </div>
      <div 
        className="logo-container"
        style={{
          opacity: 1 - heroOpacity,
          width: logoSize,
          height: logoSize,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img className='swissmote_hero' src="/swissmote_hero.png" alt="SwissMode Logo" />
      </div>
    </div>
  );
};

export default Hero;