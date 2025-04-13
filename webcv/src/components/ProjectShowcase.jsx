import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectShowcase.css'; // <- new CSS file for custom styles


const ProjectShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Brain-Computer Interface Simulation",
      category: "Machine Learning",
      shortDescription: "CNN-based brain wave classification for motion intent detection",
      description: "A deep learning system that utilizes convolutional neural networks (CNNs) to classify EEG brain wave signals corresponding to left and right motor imagery. Designed for brain-computer interface (BCI) applications in neural control systems.",
      technologies: ["Python", "TensorFlow", "C++", "Rust"],
      thumbnail: "brainwave_interface_thumb.jpeg",
      images: ["brainwave_interface_1.jpg"],
      githubLink: "https://github.com/...",
      demoLink: "",
      year: "2025",
      month: "1"
    },
    {
      id: 2,
      title: "Property Development Catalogue",
      category: "Full Stack Web Development",
      shortDescription: "Real estate listing & reservation platform",
      description: "A responsive full-stack web application designed for real estate companies. Enables dynamic listing of units, browsing of property details, online reservations, and customer data management for estate agents.",
      technologies: ["React", "Node.js", "SQL", "Spring Boot", "Java", "JWT", "Redux"],
      thumbnail: "property_catalogue_thumb.jpeg",
      images: ["property_catalogue_1.jpg", "property_catalogue_2.jpg"],
      githubLink: "",
      demoLink: "",
      year: "2024",
      month: "4"
    },
    {
      id: 3,
      title: "Automatic Reading Tutor",
      category: "Machine Learning",
      shortDescription: "Phoneme recognition & pronunciation correction system",
      description: "An educational web tool using Transformer-based models to evaluate spoken language input and provide feedback on phoneme accuracy. Helps learners improve pronunciation through real-time ML-powered tutoring.",
      technologies: ["Python", "Django", "Transformers", "PyTorch", "SQL", "React", "Node.js"],
      thumbnail: "reading_tutor_thumb.jpeg",
      images: ["reading_tutor_1.jpg", "reading_tutor_2.jpg"],
      githubLink: "https://github.com/yourusername/stock-predictor",
      demoLink: "",
      year: "2024",
      month: "9"
    },
    {
      id: 4,
      title: "Employee Management System",
      category: "Web Development",
      shortDescription: "CRUD-based employee management web application",
      description: "A streamlined platform to manage company personnel records. Includes functionality for creating, reading, updating, and deleting employee profiles, with backend integration and secure user roles.",
      technologies: ["Node.js", "JavaScript", "React", "SQL", "Spring Boot", "Java"],
      thumbnail: "employee_management_thumb.jpeg",
      images: ["employee_management_1.jpg", "employee_management_2.jpg"],
      githubLink: "https://github.com/yourusername/ecommerce",
      demoLink: "",
      year: "2024",
      month: "2"
    },
    {
      id: 5,
      title: "Python Personal Assistant",
      category: "Voice Recognition",
      shortDescription: "Voice-controlled Python assistant using Google APIs",
      description: "A lightweight virtual assistant built with Python that understands voice commands to perform tasks like answering queries via Google and WolframAlpha APIs, providing a hands-free interaction model.",
      technologies: ["Python", "Speech Recognition", "JSON", "WolframAlpha"],
      thumbnail: "python_assistant_thumb.jpeg",
      images: ["python_assistant_1.jpg", "python_assistant_2.jpg"],
      githubLink: "https://github.com/yourusername/gesture-control",
      demoLink: "",
      year: "2023",
      month: "10"
    },
    {
      id: 6,
      title: "AI Honey Analysis",
      category: "Computer Vision",
      shortDescription: "Deep learning pollen detection in honey samples",
      description: "A computer vision project using CNNs to identify and classify South African pollen grains in honey, aiding in authenticity verification and quality analysis.",
      technologies: ["Python", "Pytorch", "Vision Transformers", "Object Detection", "Image Classification"],
      thumbnail: "honey_analysis_thumb.jpeg",
      images: ["honey_analysis_1.jpg", "honey_analysis_2.jpg"],
      githubLink: "https://github.com/yourusername/smart-home",
      demoLink: "",
      year: "2025",
      month: "9"
    }
  ];
  
  // Sort projects by newest to oldest
  const sortedProjects = [...projects].sort((a, b) => {
    // Convert year and month to numbers for comparison
    const dateA = new Date(parseInt(a.year), parseInt(a.month) - 1);
    const dateB = new Date(parseInt(b.year), parseInt(b.month) - 1);
    
    // Sort in descending order (newest first)
    return dateB - dateA;
  });


  return (
    <div id='projects' className="project-showcase-container">
      {/* Left text section */}
      <div className="project-intro">
        <h2>Projects</h2>
        <p>
          I've worked on a range of projects, touching on several cutting-edge
          computer science fields—from deep learning and natural language processing
          to full-stack web applications and voice-controlled assistants.
        </p>
      </div>

      {/* Right vertical carousel */}
      <div className="project-carousel-vertical">
        <div className="carousel-scroll">
          {sortedProjects.map((project) => (
            <div
            key={project.id}
            className="project-card"
            onClick={() => {
              setSelectedProject(project);
              setShowModal(true);
            }}
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          >
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.shortDescription}</p>
            </div>
          </div>
          
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectShowcase;