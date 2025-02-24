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
      title: "ML Image Classification",
      category: "Machine Learning",
      shortDescription: "Medical image classification using CNN",
      description: "A deep learning model for classifying medical images...",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      thumbnail: "lmao.jpg",
      images: ["lmao.jpg"],
      githubLink: "https://github.com/...",
      demoLink: "https://demo..."
    },
    {
      id: 2,
      title: "Real-time Chat Platform",
      category: "Web Development",
      shortDescription: "Full-stack chat application with real-time features",
      description: "A modern chat application supporting real-time messaging, file sharing, and video calls. Features include end-to-end encryption, message persistence, read receipts, and user presence indicators. Built with a microservices architecture and deployed on AWS.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS", "WebRTC"],
      thumbnail: "/path/to/chat-thumb.jpg",
      images: ["/path/to/chat1.jpg", "/path/to/chat2.jpg"],
      githubLink: "https://github.com/yourusername/chat-app",
      demoLink: "https://chat-demo.com"
    },
    {
      id: 3,
      title: "Stock Market Predictor",
      category: "Machine Learning",
      shortDescription: "LSTM-based stock price prediction model",
      description: "An advanced time series analysis tool that predicts stock market trends using LSTM neural networks. Incorporates sentiment analysis from social media and news sources. Backtested on 10 years of historical data with a prediction accuracy of 76%.",
      technologies: ["Python", "Keras", "NLTK", "pandas", "PostgreSQL"],
      thumbnail: "/path/to/stock-thumb.jpg",
      images: ["/path/to/stock1.jpg", "/path/to/stock2.jpg"],
      githubLink: "https://github.com/yourusername/stock-predictor",
      demoLink: "https://stock-predictor-demo.com"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Web Development",
      shortDescription: "Full-featured online marketplace",
      description: "A complete e-commerce solution with features including product management, cart functionality, payment processing, order tracking, and admin dashboard. Implements OAuth2 authentication and includes a review system with image uploads.",
      technologies: ["Next.js", "TypeScript", "Stripe", "MySQL", "Redux", "AWS S3"],
      thumbnail: "/path/to/ecom-thumb.jpg",
      images: ["/path/to/ecom1.jpg", "/path/to/ecom2.jpg"],
      githubLink: "https://github.com/yourusername/ecommerce",
      demoLink: "https://ecommerce-demo.com"
    },
    {
      id: 5,
      title: "Gesture Control System",
      category: "Computer Vision",
      shortDescription: "Real-time hand gesture recognition for PC control",
      description: "A computer vision system that recognizes hand gestures in real-time to control PC functions. Uses MediaPipe for hand tracking and custom gesture recognition algorithms. Supports volume control, media playback, and presentation controls.",
      technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
      thumbnail: "/path/to/gesture-thumb.jpg",
      images: ["/path/to/gesture1.jpg", "/path/to/gesture2.jpg"],
      githubLink: "https://github.com/yourusername/gesture-control",
      demoLink: "https://gesture-demo.com"
    },
    {
      id: 6,
      title: "Smart Home Dashboard",
      category: "IoT",
      shortDescription: "IoT device management platform",
      description: "A centralized dashboard for managing smart home devices. Features include real-time device status monitoring, automated scheduling, energy usage analytics, and mobile app control. Supports multiple IoT protocols and includes a REST API.",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "GraphQL", "Docker"],
      thumbnail: "/path/to/iot-thumb.jpg",
      images: ["/path/to/iot1.jpg", "/path/to/iot2.jpg"],
      githubLink: "https://github.com/yourusername/smart-home",
      demoLink: "https://smart-home-demo.com"
    }
  ];

  return (
    <div className="project-showcase">
    <h3 style={{textAlign:'center', padding:'2cqh'}}>Projects</h3>
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