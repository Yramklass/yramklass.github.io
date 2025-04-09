import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, GraduationCap, Cpu, Star } from "lucide-react";
import "./DigitalNoticeBoard.css";
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const notes = [
  { id: 1, title: "Work Experience", icon: <FileText size={28} />, content: "Detailed job history..." },
  { id: 2, title: "Education", icon: <GraduationCap size={28} />, content: "University, degrees, etc." },
  { id: 3, title: "Skills", icon: <Cpu size={28} />, content: "Languages, frameworks, tools..." },
  { id: 4, title: "Character", icon: <Star size={28} />, content: "Traits, interests, values..." },
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
    <div className="digital-board">
      <h1 className="intro-text">Hello, World! 👋</h1>
  
      <div className="file-grid">
        {notes.map((note) => (
          <motion.div
            key={note.id}
            className="file-card"
            whileHover={{ y: -6, boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)" }}
            onClick={() => setOpenNote(note)}
          >
            <div className="file-icon">{note.icon}</div>
            <div className="file-title">{note.title}</div>
          </motion.div>
        ))}
      </div>
  
      <div className="contact-footer">
  <a
    href="mailto:yramklass@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
    title="Email"
  >
    <IoMailSharp size={24} />
  </a>
  <a
    href="tel:+27823691475"
    className="contact-icon"
    title="Call"
  >
    <FaPhone size={24} />
  </a>
  <a
    href="https://github.com/yramklass"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-icon"
    title="GitHub"
  >
    <FaGithub size={24} />
  </a>
</div>

      {/* Modals */}
      <AnimatePresence>
        {openNote && (
          <>
            <motion.div
              className="file-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              onClick={handleClose}
            />
            <motion.div
              className={`file-modal ${isMaximized ? "maximized" : ""} ${isMinimized ? "minimized" : ""}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
                width: isMaximized ? "90vw" : "400px",
                height: isMinimized ? "auto" : isMaximized ? "90vh" : "auto",
                x: "-50%",
                y: "-50%"
              }}
              exit={{ 
                scale: 0.9, 
                opacity: 0,
                transition: { duration: 0.15 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                  <p>{openNote?.content}</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
  
}
