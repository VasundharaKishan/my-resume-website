import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Projects />
       <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
