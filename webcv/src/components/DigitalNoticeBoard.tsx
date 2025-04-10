import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, GraduationCap, Cpu, Star } from "lucide-react";
import "./DigitalNoticeBoard.css";
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const notes = [
  { id: 1, title: "Work Experience", icon: <FileText size={28} />, content: (<div>
    <h3 className="mb-2">Computer Science Tutor</h3>
    <p><strong>University of Cape Town</strong> — <em>Feb 2024 – Present</em></p>
    <ul>
      <li>Marked scripts and assignments for Computer Science courses.</li>
      <li>Assisted with invigilation and lab support for students.</li>
    </ul>
  
    <h3 className="mt-4 mb-2">Volunteer Tutor – SHAWCO</h3>
    <p><strong>University of Cape Town</strong> — <em>Feb 2024 – July 2024</em></p>
    <ul>
      <li>Taught digital literacy to disadvantaged learners.</li>
    </ul>
  
    <h3 className="mt-4 mb-2">Volunteer</h3>
    <ul>
      <li>Haven Night Shelter</li>
      <li>Meals on Wheels</li>
    </ul>
  </div>
  ) },
  { id: 2, title: "Education", icon: <GraduationCap size={28} />, content: (<div>
    <h3>University of Cape Town</h3>
    <p><strong>BBusSci in Computer Science</strong></p>
    <p><em>Deans List (2023)</em></p>
    <p><strong>Relevant Coursework:</strong></p>
    <ul>
      <li>Computer Networks, Computer Architecture</li>
      <li>Data Structures & Algorithms</li>
      <li>Applied Statistics, Discrete Mathematics</li>
      <li>Systems Analysis, Economics</li>
    </ul>
  
    <h3 className="mt-4">Wynberg Boys’ High School</h3>
    <p><strong>National Senior Certificate</strong></p>
    <p><em>Dux Pupil (2020)</em></p>
    <p><strong>Subjects:</strong> English, Afrikaans, Mathematics, Life Orientation, IT, Physical Sciences, Life Sciences, Economics</p>

    
  </div>
  ) },
  { id: 3, title: "Skills", icon: <Cpu size={28} />, content:(<div>
    <h4>Technical Skills</h4>
    <ul>
      <li>Languages: Python, Java, JavaScript, R, SQL, HTML, CSS</li>
      <li>Frameworks: Django, Spring Boot, React</li>
      <li>Other: C++, Rust, Git, Linux</li>
    </ul>
  
    <h4 className="mt-4">Core Strengths</h4>
    <ul>
      <li>Experienced full-stack developer</li>
      <li>Creative problem solver</li>
      <li>Fast learner, strong communicator</li>
      <li>Team player, flexible, adaptable</li>
      <li>Goal-oriented, punctual, diligent</li>
      <li>Innovative and analytical</li>
    </ul>
  </div>
  )},
  { id: 4, title: "Character", icon: <Star size={28} />, content: (<div>
    <p>
      I am a highly motivated and goal-oriented individual, committed to continuous personal and professional growth.
      My strengths lie in my ability to communicate clearly, solve complex problems creatively, and work effectively with others.
    </p>
    <p>
      My passion for learning and technology drives me to seek out challenges that push my boundaries — whether it's building systems,
      mentoring others, or contributing to impactful projects.
    </p>
    <p>
      I strive to be reliable, diligent, and adaptable — someone who contributes positively to teams and communities.
    </p>
  </div>
  ) },
  
];


export default function DigitalNoticeBoard() {
  const [openNote, setOpenNote] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = () => {
    setIsMaximized(false);
    setIsMinimized(false);
    setOpenNote(null);
  };

  return (
    <div className="digital-board glassy">
      <div className="digital-board">
        <h1 className="intro-text">Hello, World! 👋</h1>

        <div className="file-grid">
          {notes.map((note) => (
            <motion.div
              key={note.id}
              className="file-card glassy"
              whileHover={{ y: -6, boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)" }}
              onClick={() => setOpenNote(note)}
            >
              <div className="file-icon">{note.icon}</div>
              <div className="file-title">{note.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="contact-footer">
          <a href="mailto:yramklass@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon glassy" title="Email">
            <IoMailSharp size={24} />
          </a>
          <a href="tel:+27823691475" className="contact-icon glassy" title="Call">
            <FaPhone size={24} />
          </a>
          <a href="https://github.com/yramklass" target="_blank" rel="noopener noreferrer" className="contact-icon glassy" title="GitHub">
            <FaGithub size={24} />
          </a>
        </div>

        <AnimatePresence>
          {openNote && (
            <motion.div
              className={`file-modal glassy ${isMaximized ? "maximized" : ""} ${isMinimized ? "minimized" : ""}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                width: isMaximized ? "90%" : "90%",
                height: isMinimized ? "auto" : isMaximized ? "85%" : "auto",
                x: "-50%",
                y: "-50%"
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                transition: { duration: 0.15 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="modal-header-bar">
                <div className="window-buttons">
                  <span className="btn red" onClick={handleClose} />
                  <span className="btn yellow" onClick={() => setIsMinimized(!isMinimized)} />
                  <span className="btn green" onClick={() => setIsMaximized(!isMaximized)} />
                </div>
                <span className="window-title">{openNote?.title}</span>
              </div>
              {!isMinimized && (
                <div className="modal-body-content">
                  {openNote?.content}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
