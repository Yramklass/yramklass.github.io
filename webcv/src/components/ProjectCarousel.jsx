import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects = [], setShowModal, setSelectedProject }) => {
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 1600 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (!projects.length) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h3>No projects available</h3>
      </div>
    );
  }

  return (
    <Carousel
      responsive={responsive}
      arrows
      infinite
      autoPlaySpeed={3000}
      centerMode
      swipeable
      draggable
      keyBoardControl
      containerClass="carousel-container"
      itemClass="carousel-item-padding"
      showDots={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onCardClick={() => {
            setSelectedProject(project);
            setShowModal(true);
          }}
        />
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;