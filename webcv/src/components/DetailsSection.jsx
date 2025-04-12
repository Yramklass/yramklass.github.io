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
            Hi! I'm Yash, a passionate Full-Stack Developer with a background in Computer Science from UCT.
            I enjoy building beautiful, functional tech that solves real-world problems.
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
              economics, finance, and programming — giving me a powerful problem-solving toolkit.
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
        I've worked on various projects, from full-stack web apps to machine learning pipelines.
        Here's a look at some of my recent work.
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
