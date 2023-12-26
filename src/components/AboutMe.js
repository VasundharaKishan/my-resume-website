import React from 'react';
import './AboutMe.css'; // Make sure to create a corresponding CSS file

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>
        Hello! I'm [Your Name], a passionate and dedicated [Your Profession] with a love for [mention your interests or skills]. I have [number] years of experience in [your field or expertise].
      </p>
      <p>
        I specialize in [mention specific skills or areas of expertise]. In my free time, I enjoy [mention hobbies or personal interests].
      </p>
      {/* Add more personal details or professional highlights as needed */}
    </div>
  );
}

export default AboutMe;
