import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const isProjectPage = window.location.pathname.startsWith('/project/');

  if (isProjectPage) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <ProjectDetails />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;