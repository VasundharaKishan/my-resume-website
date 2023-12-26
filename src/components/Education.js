import React from 'react';
import './Education.css'; // Ensure you create a corresponding CSS file

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-entry">
        <h3>Degree Name - Institution Name</h3>
        <p className="education-duration">Month Year - Month Year</p>
        <p className="education-description">
          A brief description of your studies, any honors or achievements, and activities involved in.
        </p>
      </div>
      {/* Repeat the 'education-entry' div for each educational qualification */}
    </div>
  );
}

export default Education;
