import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { Link as ScrollLink } from 'react-scroll';

const HeaderComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("up");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    // Function to handle clicks outside navigation links
    const handleClickOutside = (event) => {
      // Only execute if menu is open
      if (!mobileMenuOpen) return;
      
      // Check if the click was on a menu link or the hamburger icon
      const isMenuLink = event.target.closest('.mobile-menu-link');
      const isHamburger = event.target.closest('.hamburger-menu');
      
      // If the click wasn't on a menu link or hamburger, close the menu
      if (!isMenuLink && !isHamburger) {
        setMobileMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`custom-navbar ${scrollY > 30 ? 'solid' : ''} ${scrollDir === 'down' && scrollY > 30 ? 'hidden' : ''}`}>
        <div className="nav-left">
          <img src="signature_white.png" alt="Yash Signature" className="signature-logo" />
        </div>
        
        <div className="nav-right desktop-menu">
          <ScrollLink to="about" spy smooth duration={500} offset={-80} activeClass="active">About</ScrollLink>
          <ScrollLink to="education" spy smooth duration={500} offset={-80} activeClass="active">Education</ScrollLink>
          <ScrollLink to="experience" spy smooth duration={500} offset={-80} activeClass="active">Experience</ScrollLink>
          <ScrollLink to="projects" spy smooth duration={500} offset={-80} activeClass="active">Projects</ScrollLink>
          <ScrollLink to="contact" spy smooth duration={500} offset={-80} activeClass="active">Contact</ScrollLink>
        </div>
        
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
        <div className="close-btn" onClick={closeMobileMenu}>×</div>
        <div className="mobile-menu-links">
          <ScrollLink 
            className="mobile-menu-link"
            to="about" 
            spy 
            smooth 
            duration={500} 
            offset={-80} 
            activeClass="active" 
            onClick={closeMobileMenu}
          >
            About
          </ScrollLink>
          <ScrollLink 
            className="mobile-menu-link"
            to="education" 
            spy 
            smooth 
            duration={500} 
            offset={-80} 
            activeClass="active" 
            onClick={closeMobileMenu}
          >
            Education
          </ScrollLink>
          <ScrollLink 
            className="mobile-menu-link"
            to="experience" 
            spy 
            smooth 
            duration={500} 
            offset={-80} 
            activeClass="active" 
            onClick={closeMobileMenu}
          >
            Experience
          </ScrollLink>
          <ScrollLink 
            className="mobile-menu-link"
            to="projects" 
            spy 
            smooth 
            duration={500} 
            offset={-80} 
            activeClass="active" 
            onClick={closeMobileMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink 
            className="mobile-menu-link"
            to="contact" 
            spy 
            smooth 
            duration={500} 
            offset={-80} 
            activeClass="active" 
            onClick={closeMobileMenu}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
      
      <header className="headerBox">
        <div className="header-center">
          <h1>Yash Ramklass</h1>
          <h3>Full-Stack Developer</h3>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;