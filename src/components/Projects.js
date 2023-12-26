import React from 'react';
import './Projects.css'; // Ensure you create a corresponding CSS file

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title 1</h3>
        <p className="project-description">
          Brief description of Project 1. Discuss the technologies used, the problem it solves, and any notable features.
        </p>
        {/* Add links to live project or code repository if available */}
      </div>
      <div className="project">
        <h3>Project Title 2</h3>
        <p className="project-description">
          Brief description of Project 2. This could be a personal project, a significant academic assignment, or a noteworthy professional contribution.
        </p>
        {/* Repeat for other projects */}
      </div>
    </div>
  );
}

export default Projects;
