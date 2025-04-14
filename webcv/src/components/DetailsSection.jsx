import React from 'react';
import './DetailsSection.css';

const DetailsSection = () => {
  return (
    <div>
      {/* About Me */}
      <section id="about" className="section about-section">
        <img src="mirror.jpg" alt="Profile" className="profile-img" />
        <div className="glass-card">
          <p className="section-text">
          Hi! I'm Yash, a Computer Science graduate from UCT with a passion for building elegant, effective tech that solves real-world problems.
           I'm especially drawn to systems thinking, collaborative problem-solving, and using data to drive meaningful outcomes.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section education-section">
        <div className="section-content">
          <img src="UCT_Logo.png" alt="Education" className="section-img" />
          <div className="section-text">
            <h2>Education</h2>
            <p>
              I studied Business Science in Computer Science at the University of Cape Town. My coursework combined
              economics, finance, and software engineering — giving me a versatile and analytical problem-solving toolkit.
            </p>
          </div>
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
      <img src="job1.jpg" alt="Job 1" />
      <img src="lmao.jpg" alt="Job 2" />
      <img src="job3.png" alt="Job 3" />
      <img src="job4.png" alt="Job 4" />
    </div>
  </div>
</section>


    </div>
  );
};

export default DetailsSection;
