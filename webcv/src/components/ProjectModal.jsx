import React from 'react';
import { Modal, Badge, Carousel } from 'react-bootstrap';
import './ProjectModal.css'; // Add this line to load your custom styles
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      contentClassName="custom-modal-content"
      dialogClassName="custom-modal-dialog"
    >
      <div className="modal-header-bar">
        <div className="window-buttons">
          <span className="btn red" onClick={onHide} />
          <span className="btn yellow" />
          <span className="btn green" />
        </div>
        <span className="window-title">{project.title}</span>
      </div>
      <Modal.Body className="custom-modal-body">
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${project.title} - view ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover', borderRadius: '12px' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <div className="mt-4">
          <h5>Description</h5>
          <p>{project.description}</p>

          <h5>Technologies Used</h5>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <Badge key={index} className="custom-badge">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="d-flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
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
                className="btn btn-primary"
              >
                <ExternalLink className="me-2" size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
