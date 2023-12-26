import React from 'react';
import './Experience.css'; // Make sure to create a corresponding CSS file

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="job">
        <h3>Job Title 1 - Company Name 1</h3>
        <p className="job-duration">Month Year - Month Year</p>
        <p className="job-description">
          Brief description of your role, responsibilities, and achievements at Company Name 1.
        </p>
      </div>
      <div className="job">
        <h3>Job Title 2 - Company Name 2</h3>
        <p className="job-duration">Month Year - Month Year</p>
        <p className="job-description">
          Brief description of your role, responsibilities, and achievements at Company Name 2.
        </p>
      </div>
      {/* Add more job entries as needed */}
    </div>
  );
}

export default Experience;
