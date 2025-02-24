import React from 'react';
import { Modal, Badge, Carousel } from 'react-bootstrap';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          {project.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`${project.title} - view ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
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
              <Badge key={index} bg="secondary">
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
                className="btn btn-dark"
              >
                View on GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
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