import React, { useState } from 'react';
import { Modal, Badge, Carousel } from 'react-bootstrap';
import './ProjectModal.css';
import { FaGithub, FaTimes, FaMinus, FaExpand } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const ProjectModal = ({ show, onHide, project }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (!project) return null;

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    setIsMinimized(false);
  };

  const getModalSize = () => {
    if (window.innerWidth <= 576) {
      // For mobile, always use full width but with bottom sheet design
      return "modal-fullscreen-sm-down";
    }
    return isMaximized ? "modal-fullscreen" : "lg";
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={getModalSize()}
      centered={!isMaximized && window.innerWidth > 576}
      contentClassName={`custom-modal-content ${isMinimized ? 'minimized' : ''} ${window.innerWidth <= 576 ? 'mobile-modal' : ''}`}
      dialogClassName={`custom-modal-dialog ${isMaximized ? 'maximized' : ''}`}
      fullscreen={window.innerWidth <= 576 ? "sm-down" : false}
    >
      <div className="modal-header-bar">
        <div className="window-buttons d-none d-sm-flex">
          <span className="btn red" onClick={onHide} title="Close" />
          <span className="btn yellow" onClick={handleMinimize} title="Minimize" />
          <span className="btn green" onClick={handleMaximize} title="Maximize" />
        </div>
        <span className="window-title">{project.title}</span>
        <div className="d-block d-sm-none">
          <button 
            className="btn btn-sm btn-outline-light" 
            onClick={onHide}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
       <Modal.Body className="custom-modal-body">
       {project.images && project.images.length > 0 ? (
         <Carousel>
           {project.images.map((image, index) => (
             <Carousel.Item key={index}>
               <img
                 className="d-block w-100"
                 src={image}
                 alt={`${project.title} - view ${index + 1}`}
                 style={{
                   height: isMaximized ? '600px' : '400px',
                   objectFit: 'cover',
                   borderRadius: '12px'
                 }}
               />
             </Carousel.Item>
           ))}
         </Carousel>
       ) : (
         <div className="no-images-box text-center p-4">
           <p className="m-0">No project images available</p>
         </div>
       )}
     
     <div className="mt-4">
  <h5 className="mb-2">Description</h5>
  
  <p>{project.description}</p>
  
  {(project.year && project.month) && (
    <p className="project-date ">
      <strong>Completion date:</strong> {new Date(project.year, project.month - 1).toLocaleString('default', {
        year: 'numeric',
        month: 'short',
      })}
    </p>
  )}
  

  <h5>Technologies Used</h5>
         <div className="d-flex flex-wrap gap-2 mb-3">
           {project.technologies.map((tech, index) => (
             <Badge key={index} className="custom-badge">
               {tech}
             </Badge>
           ))}
         </div>
     
         <div className="d-flex flex-wrap gap-3 mt-4">
           {project.githubLink && (
             <a
               href={project.githubLink}
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-outline-light mb-2"
             >
               <FaGithub className="me-2" />
               GitHub
             </a>
           )}
           {project.demoLink && (
             <a
               href={project.demoLink}
               target="_blank"
               rel="noopener noreferrer"
               className="btn btn-primary mb-2"
             >
               <ExternalLink className="me-2" size={18} />
               Live Demo
             </a>
           )}
         </div>
       </div>
     </Modal.Body>
     
      )}
      
      {isMinimized && (
        <div className="minimized-indicator p-2">
          <span>Project details minimized</span>
          <button className="btn btn-sm btn-outline-light ms-2" onClick={handleMinimize}>
            <FaExpand size={12} />
          </button>
        </div>
      )}
      
      {/* Mobile-only footer with close button */}
      {window.innerWidth <= 576 && (
        <Modal.Footer className="d-block d-sm-none border-0 bg-transparent">
          <button 
            className="btn btn-primary w-100" 
            onClick={onHide}
          >
            Close
          </button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default ProjectModal;