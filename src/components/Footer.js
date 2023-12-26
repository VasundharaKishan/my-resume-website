import React from 'react';
import './Footer.css'; // Ensure you create a corresponding CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>Contact me at: <a href="mailto:kishankumarnaukri@gmail.com">kishankumarnaukri@gmail.com</a></p>
      <p>Connect with me on <a href="https://www.linkedin.com/in/kishan-kumar-4a0b92134/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
