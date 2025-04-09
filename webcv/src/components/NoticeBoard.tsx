import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "react-bootstrap";
import '.././NoticeBoard.css';

const notes = [
  { id: 1, title: "Work Experience", color: "note-yellow", content: "Detailed job history..." },
  { id: 2, title: "Qualifications", color: "note-green", content: "University and courses..." },
  { id: 3, title: "Skills", color: "note-blue", content: "Technical and soft skills..." },
  { id: 4, title: "Character", color: "note-pink", content: "Personal traits, values..." },
];

export default function NoticeBoard() {
  const [openNote, setOpenNote] = useState(null);
  const [hoveredNoteId, setHoveredNoteId] = useState(null);

  const positions = [
    { top: 20, left: '25%', rotate: -5 },
    { top: 60, left: '50%', rotate: 4 },
    { top: 160, left: '30%', rotate: -3 },
    { top: 200, left: '55%', rotate: 5 },
  ];

  return (
    <div
      className="noticeboard-container position-relative"
      style={{
        height: 450,
        backgroundImage: `url('/board_texture.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        overflow: 'hidden',
      }}
    >
      {notes.map((note, i) => {
        const { top, left, rotate } = positions[i];
        const isHovered = hoveredNoteId === note.id;
        return (
          <motion.div
            key={note.id}
            className={`note ${note.color} position-absolute p-3 rounded shadow`}
            style={{
              width: "180px",
              height: "180px",
              top,
              left,
              rotate,
              transform: `translateX(-50%)`, // center based on left percentage
              cursor: "pointer",
              perspective: 800,
            }}
            onHoverStart={() => setHoveredNoteId(note.id)}
            onHoverEnd={() => setHoveredNoteId(null)}
            onClick={() => setOpenNote(note)}
          >
            {/* Tack centered top */}
            <motion.div
              className="tack bg-danger rounded-circle"
              style={{
                width: "14px",
                height: "14px",
                position: "absolute",
                top: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
              animate={isHovered ? { y: -6 } : { y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Note content with slight lift on hover */}
            <motion.div
              className="note-content h-100 d-flex align-items-center justify-content-center"
              animate={isHovered ? { y: -4, rotateX: 5 } : { y: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h5 className="text-dark text-center">{note.title}</h5>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Flip-style Modal */}
      <AnimatePresence>
        {openNote && (
          <motion.div
            className="modal-backdrop-custom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenNote(null)}
          />
        )}
        {openNote && (
          <motion.div
            className={`modal-note position-fixed top-50 start-50 translate-middle p-4 ${openNote.color}`}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              width: 320,
              zIndex: 1050,
              borderRadius: "10px",
              boxShadow: "4px 6px 20px rgba(0,0,0,0.3)",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="m-0">{openNote?.title}</h4>
              <button className="btn-close" onClick={() => setOpenNote(null)} />
            </div>
            <p>{openNote?.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
