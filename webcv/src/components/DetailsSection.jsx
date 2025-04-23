import React, { useState, useEffect } from 'react';
import './DetailsSection.css';

const DetailsSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const handleFlip = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };
  
  return (
    <div>
      {/* About Me */}
      <section id="about" className="section about-section">
        <div className="flip-card" onClick={handleFlip}>
          <div className={`flip-card-inner ${isFlipped && isMobile ? 'is-flipped' : ''}`}>
            <div className="flip-card-front">
              <img src="Yash_HS_black_crop.jpg" alt="Profile" className="profile-img" />
            </div>
            <div className="flip-card-back">
              <img src="backside_1.png" className="back-profile-img" />
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
      {/* Work Experience */}
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
