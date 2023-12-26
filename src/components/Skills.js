import React from 'react';
import './Skills.css'; // Ensure you create a corresponding CSS file

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-set">
        <h3>Technical Skills</h3>
        <ul>
          <li>Skill 1 (e.g., JavaScript)</li>
          <li>Skill 2 (e.g., ReactJS)</li>
          <li>Skill 3 (e.g., Node.js)</li>
          {/* Add more technical skills as needed */}
        </ul>
      </div>
      <div className="skill-set">
        <h3>Soft Skills</h3>
        <ul>
          <li>Skill 1 (e.g., Communication)</li>
          <li>Skill 2 (e.g., Teamwork)</li>
          <li>Skill 3 (e.g., Problem-solving)</li>
          {/* Add more soft skills as needed */}
        </ul>
      </div>
      {/* You can add more categories of skills if necessary */}
    </div>
  );
}

export default Skills;
