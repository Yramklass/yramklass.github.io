import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Badge } from 'react-bootstrap';

const ProjectShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Example projects - replace with your own
  const projects = [
    {
      id: 1,
      title: "ML Image Classification",
      description: "Deep learning model for classifying medical images using TensorFlow",
      shortDesc: "Medical image classification using CNN",
      category: "Machine Learning",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      image: "/api/placeholder/400/300",
      links: {
        github: "https://github.com/yourusername/project",
        demo: "https://demo-link.com"
      }
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging and user authentication",
      shortDesc: "WebSocket-based chat platform",
      category: "Web Development",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/400/300",
      links: {
        github: "https://github.com/yourusername/project",
        demo: "https://demo-link.com"
      }
    },
    // Add more projects...
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <Container >
      <h2 className="text-center mb-5">My Projects</h2>
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card 
              className="h-100 shadow-sm transition-all hover:shadow-lg cursor-pointer" 
              onClick={() => handleProjectClick(project)}
            >
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{project.category}</Card.Subtitle>
                <Card.Text>{project.shortDesc}</Card.Text>
                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} bg="secondary" className="me-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-100 mb-3"
              />
              <h5>Description</h5>
              <p>{selectedProject.description}</p>
              <h5>Technologies Used</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge key={index} bg="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="d-flex gap-3">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  View on GitHub
                </a>
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default ProjectShowcase;