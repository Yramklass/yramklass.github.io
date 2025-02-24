import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <Card 
      className="h-100 shadow-sm project-card" 
      onClick={onCardClick}
      style={{ cursor: 'pointer' ,
        position: 'relative', 
        borderRadius: '15px', 
        borderColor: 'black',
        overflow: 'hidden', 
        height: '100%', 
        width: 'auto',
        margin: '0 0.5rem',  
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
    >   
      <Card.Img 
        variant="top" 
        src={project.thumbnail} 
        alt={project.title}
        style={{ height: '100%', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {project.category}
        </Card.Subtitle>
        <Card.Text>{project.shortDescription}</Card.Text>
        <div className="d-flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} bg="secondary" className="me-1">
              {tech}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;