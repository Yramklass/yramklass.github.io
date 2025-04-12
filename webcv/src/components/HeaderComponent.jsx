import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link as ScrollLink } from 'react-scroll';


const HeaderComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("up");

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

  return (
    <>
      <nav className={`custom-navbar ${scrollY > 30 ? 'solid' : ''} ${scrollDir === 'down' && scrollY > 30 ? 'hidden' : ''}`}>
        <div className="nav-left">
          <img src="signature_white.png" alt="Yash Signature" className="signature-logo" />
        </div>
        <div className="nav-right">
        <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">About</ScrollLink>
<ScrollLink to="education" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Education</ScrollLink>
<ScrollLink to="experience" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Experience</ScrollLink>
<ScrollLink to="projects" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Projects</ScrollLink>
<ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-80} activeClass="active">Contact</ScrollLink>

          
        </div>
      </nav>

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
