import { useState } from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [activeNav, setActiveNav] = useState('hero');

  const handleNavClick = (section) => {
    setActiveNav(section);
  };

  return (
    <div className="bg-bg-dark text-text-light min-h-screen">
      <Navigation activeNav={activeNav} onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
