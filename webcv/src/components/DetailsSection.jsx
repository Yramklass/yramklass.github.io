import React, { useState, useEffect, useRef } from 'react';
import './DetailsSection.css';

const DetailsSection = () => {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const cardRef = useRef(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Spin card based on direction
  const spinCard = (direction) => {
    setRotation((prev) => prev + (direction === 'right' ? 360 : -360));
  };

  // Mobile swipe start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Mobile swipe end
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      const direction = deltaX > 0 ? 'right' : 'left';
      spinCard(direction);
    }
    touchStartX.current = null;
  };

  // Desktop hover: determine spin direction based on mouse entry side
  const handleMouseEnter = (e) => {
    if (isMobile) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const direction = x < bounds.width / 2 ? 'left' : 'right';
    spinCard(direction);
  };

  // Reset on click (desktop only)
  const handleFlip = () => {
    if (!isMobile) {
      setRotation(0);
    }
  };

  return (
    <div>
      <section id="about" className="section about-section">
        <div
          ref={cardRef}
          className="flip-card"
          onClick={handleFlip}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
        >
          <div
            className="flip-card-inner"
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            <div className="flip-card-front">
              <img src="Yash_HS_black_crop.jpg" alt="Profile" className="profile-img" />
            </div>
            <div className="flip-card-back">
              <img src="backside_1.png" alt="Back" className="back-profile-img" />
            </div>
          </div>
        </div>

        <div className="glass-card">
          <p className="section-text">
            Hi! I'm Yash, a Computer Science graduate from UCT with a passion for building elegant, effective tech that solves real-world problems.
            I'm especially drawn to systems thinking, collaborative problem-solving, and using data to drive meaningful outcomes.
          </p>
        </div>
      </section>

      <section id="experience" className="section experience-section">
        <div className="section-content experience-layout">
          <div className="section-text">
            <h2>Work Experience</h2>
            <p>
              My professional experience includes tutoring in UCT’s Computer Science department (since 2024), freelance web development, and several meaningful volunteer roles.
              These experiences have strengthened my communication, leadership, and collaboration skills—core to how I work best.
            </p>
          </div>

          <div className="experience-grid">
            <a href="https://www.blueplanetconsulting.co.za/" target="_blank" rel="noopener noreferrer">
              <img src="bpc_logo.png" alt="Job 1" />
            </a>
            <a href="https://haven.org.za/" target="_blank" rel="noopener noreferrer">
              <img src="haven_logo.jpg" alt="Job 2" />
            </a>
            <a href="https://www.shawco.org/" target="_blank" rel="noopener noreferrer">
              <img src="shawco_logo.png" alt="Job 3" />
            </a>
            <a href="https://www.uct.ac.za/" target="_blank" rel="noopener noreferrer">
              <img src="UCT_Logo.png" alt="Job 4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsSection;
