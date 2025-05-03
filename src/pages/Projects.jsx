import React from 'react';
import Carousel from '../components/Carousel'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="popup-window">Project 1</div>
        <div className="popup-window">Project 2</div>
      </div>
      <>
            <h2 style={{ textAlign: "center" }}>Carousel Show</h2>
            <Carousel />
        </>
    </section>
  );
};

export default Projects;