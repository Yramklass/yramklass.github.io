import React, { useState, useEffect, useRef } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectShowcase.css';
import { ChevronRight } from 'lucide-react';

const ProjectShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll for hiding the swipe indicator
  useEffect(() => {
    if (!carouselRef.current || !isMobile) return;
    
    const handleScroll = () => {
      if (carouselRef.current.scrollLeft > 10) {
        setIsScrolled(true);
      }
    };
    
    const scrollElement = carouselRef.current;
    scrollElement.addEventListener('scroll', handleScroll);
    
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);
  

  const projects = [
    {
      id: 1,
      title: "Brain-Computer Interface Simulation",
      category: "Machine Learning",
      shortDescription: "CNN-based brain wave classification for motion intent detection",
      description: "A deep learning system designed to interpret EEG signals to distinguish between 'left' and 'right' motion intents using a CNN-LSTM hybrid model. Integrated C++ and Rust for preprocessing and inference speed, with ONNX export for seamless cross-language deployment.",
      technologies: ["Python", "TensorFlow", "C++", "Rust"],
      thumbnail: "/BCI-Simulation/brainwave_interface_thumb.jpeg",
      images: [],
      githubLink: "https://github.com/Yramklass/BCI-simulation",
      demoLink: "",
      year: 2025,
      month: 1
    },
    {
      id: 2,
      title: "Property Development Catalogue",
      category: "Full Stack Web Development",
      shortDescription: "Real estate listing & reservation platform",
      description: "A responsive full-stack web application for managing property listings, bookings, and user accounts. Features dynamic filtering, authentication, image upload, and admin dashboard. Developed using React, Redux, Spring Boot, and MySQL with JWT authentication.",
      technologies: ["React", "Node.js", "SQL", "Spring Boot", "Java", "JWT", "Redux"],
      thumbnail: "/Property_Development_Catalogue/property_catalogue_thumb.jpeg",
      images: [
        "/Property_Development_Catalogue/property_catalogue_1.png",
        "/Property_Development_Catalogue/property_catalogue_2.png",
        "/Property_Development_Catalogue/property_catalogue_3.png"
      ],
      githubLink: "",
      demoLink: "",
      year: 2024,
      month: 4
    },
    {
      id: 3,
      title: "Automatic Reading Tutor",
      category: "Machine Learning",
      shortDescription: "Phoneme recognition & pronunciation correction system",
      description: "An educational web tool using Transformer-based models to identify spoken phonemes, give real-time feedback, and track learners' reading proficiency over time. Built using Django, PyTorch, Hugging Face Transformers, and integrated React frontend.",
      technologies: ["Python", "Django", "Transformers", "PyTorch", "SQL", "React", "Node.js"],
      thumbnail: "/Reading_Tutor/reading_tutor_thumb.jpeg",
      images: [
        "/Reading_Tutor/reading_tutor_1.png",
        "/Reading_Tutor/reading_tutor_2.png",
        "/Reading_Tutor/reading_tutor_3.png",
        "/Reading_Tutor/reading_tutor_4.png",
        "/Reading_Tutor/reading_tutor_5.png",
      ],
      githubLink: "https://github.com/Yramklass/READ-Automatic-Tutor",
      demoLink: "",
      year: 2024,
      month: 9
    },
    {
      id: 4,
      title: "Employee Management System",
      category: "Web Development",
      shortDescription: "CRUD-based employee management web application",
      description: "A streamlined platform for HR teams to manage employee records, roles, and departments with full CRUD operations and secure login. Built with a Spring Boot backend, SQL database, and React-powered frontend.",
      technologies: ["Node.js", "JavaScript", "React", "SQL", "Spring Boot", "Java"],
      thumbnail: "/Employee_Management_System/employee_management_thumb.jpeg",
      images: [
        "/Employee_Management_System/employee_management_1.png",
        "/Employee_Management_System/employee_management_2.png",
        "/Employee_Management_System/employee_management_3.png"
      ],
      githubLink: "https://github.com/Yramklass/Employment-Management-System",
      demoLink: "",
      year: 2024,
      month: 2
    },
    {
      id: 5,
      title: "Python Personal Assistant",
      category: "Voice Recognition",
      shortDescription: "Voice-controlled Python assistant using Google APIs",
      description: "A lightweight virtual assistant built with Python that can respond to voice commands, provide weather updates, perform calculations, and fetch answers from WolframAlpha and Google. Built with SpeechRecognition and text-to-speech libraries.",
      technologies: ["Python", "Speech Recognition", "JSON", "WolframAlpha"],
      thumbnail: "/Python_Personal_Assistant/python_assistant_thumb.jpeg",
      images: [],
      githubLink: "https://github.com/Yramklass/Personal-Assistant",
      demoLink: "",
      year: 2023,
      month: 10
    },
    {
      id: 6,
      title: "AI Honey Analysis",
      category: "Computer Vision",
      shortDescription: "Deep learning pollen detection in honey samples",
      description: "A computer vision project using state-of-the-art object detection models (YOLO, Vision Transformers) to identify and classify pollen grains in microscopic honey images, aiding in the authentication of honey origin and quality.",
      technologies: ["Python", "Pytorch", "Vision Transformers", "CNNs", "YOLO"],
      thumbnail: "/AI_Honey_Analysis/honey_analysis_thumb.jpeg",
      images: [],
      githubLink: "https://github.com/Yramklass/POL-ID",
      demoLink: "",
      year: 2025,
      month: 9
    },
    {
      id: 7,
      title: "FNB DataQuest Recommender System",
      category: "Machine Learning",
      shortDescription: "Product recommendation system for FNB",
      description: "First-place winning project in First National Bank's DataQuest 2025 challenge. This recommender system leveraged user interaction data to suggest relevant banking products. It used a two-tower architecture with BPR loss, session embeddings, and transformer-based enhancements to capture user intent and improve personalization.",
      technologies: ["Python", "PyTorch", "TorchRec", "BPR Loss", "Transformers"],
      thumbnail: "/FNB_Dataquest/fnb_logo.jpg",
      images: [],
      githubLink: "https://github.com/Yramklass/FNBDataQuest2025",
      demoLink: "",
      year: 2025,
      month: 5
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
        I've worked on a range of projects 
        exploring cutting-edge fields—from deep learning and natural language processing to 
        computer vision and full-stack web development—all grounded in solving complex, data-driven problems.
        </p>
      </div>

      {/* Project carousel - vertical on desktop, horizontal on mobile */}
      <div className="project-carousel-vertical">
        <div 
          ref={carouselRef}
          className={`carousel-scroll ${isScrolled ? 'scrolled' : ''}`}
        >
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
          
          {/* Swipe indicator for mobile */}
          {isMobile && !isScrolled && (
            <div className="swipe-indicator">
              <ChevronRight color="white" size={24} />
            </div>
          )}
        </div>
        
        {/* Mobile scroll hint */}
        {isMobile && (
          <div className="mobile-scroll-hint">
            Swipe to explore more projects
          </div>
        )}
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