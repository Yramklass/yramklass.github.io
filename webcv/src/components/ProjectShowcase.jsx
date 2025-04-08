// ProjectShowcase.jsx
import React, { useState } from 'react';
import ProjectCarousel from './ProjectCarousel';
import ProjectModal from './ProjectModal';

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
      thumbnail: "brainwave_interface_thumb.jpg",
      images: ["brainwave_interface_1.jpg"],
      githubLink: "https://github.com/...",
      demoLink: ""
    },
    {
      id: 2,
      title: "Property Development Catalogue",
      category: "Full Stack Web Development",
      shortDescription: "Real estate listing & reservation platform",
      description: "A responsive full-stack web application designed for real estate companies. Enables dynamic listing of units, browsing of property details, online reservations, and customer data management for estate agents.",
      technologies: ["React", "Node.js", "SQL", "Spring Boot", "Java", "JWT", "Redux"],
      thumbnail: "property_catalogue_thumb.jpg",
      images: ["property_catalogue_1.jpg", "property_catalogue_2.jpg"],
      githubLink: "",
      demoLink: ""
    },
    {
      id: 3,
      title: "Automatic Reading Tutor",
      category: "Machine Learning",
      shortDescription: "Phoneme recognition & pronunciation correction system",
      description: "An educational web tool using Transformer-based models to evaluate spoken language input and provide feedback on phoneme accuracy. Helps learners improve pronunciation through real-time ML-powered tutoring.",
      technologies: ["Python", "Django", "Transformers", "PyTorch", "SQL", "React", "Node.js"],
      thumbnail: "reading_tutor_thumb.jpg",
      images: ["reading_tutor_1.jpg", "reading_tutor_2.jpg"],
      githubLink: "https://github.com/yourusername/stock-predictor",
      demoLink: ""
    },
    {
      id: 4,
      title: "Employee Management System",
      category: "Web Development",
      shortDescription: "CRUD-based employee management web application",
      description: "A streamlined platform to manage company personnel records. Includes functionality for creating, reading, updating, and deleting employee profiles, with backend integration and secure user roles.",
      technologies: ["Node.js", "JavaScript", "React", "SQL", "Spring Boot", "Java"],
      thumbnail: "employee_management_thumb.jpg",
      images: ["employee_management_1.jpg", "employee_management_2.jpg"],
      githubLink: "https://github.com/yourusername/ecommerce",
      demoLink: ""
    },
    {
      id: 5,
      title: "Python Personal Assistant",
      category: "Voice AI / Natural Language Processing",
      shortDescription: "Voice-controlled Python assistant using Google APIs",
      description: "A lightweight virtual assistant built with Python that understands voice commands to perform tasks like answering queries via Google and WolframAlpha APIs, providing a hands-free interaction model.",
      technologies: ["Python", "Speech Recognition", "JSON", "WolframAlpha"],
      thumbnail: "python_assistant_thumb.jpg",
      images: ["python_assistant_1.jpg", "python_assistant_2.jpg"],
      githubLink: "https://github.com/yourusername/gesture-control",
      demoLink: ""
    },
    // Uncomment to include
    {
      id: 6,
      title: "AI Honey Analysis",
      category: "Computer Vision",
      shortDescription: "Deep learning pollen detection in honey samples",
      description: "A computer vision project using CNNs to identify and classify South African pollen grains in honey, aiding in authenticity verification and quality analysis.",
      technologies: ["Python", "Pytorch","Vision Transformers","Object Detection","Image Classification"],
      thumbnail: "honey_analysis_thumb.jpg",
      images: ["honey_analysis_1.jpg", "honey_analysis_2.jpg"],
      githubLink: "https://github.com/yourusername/smart-home",
      demoLink: ""
    }
  ];
  

  return (
    <div className="project-showcase">
    <h3 style={{textAlign:'center', padding:'2cqh', backgroundColor:'lightgray',}}>Projects</h3>
      <div className='project-carousel'>
      <ProjectCarousel
        projects={projects}
        setShowModal={setShowModal}
        setSelectedProject={setSelectedProject}
      />
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={selectedProject}
      />
      </div>
    </div>
  );
};

export default ProjectShowcase;