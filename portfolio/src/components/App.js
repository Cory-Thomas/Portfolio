import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection.js';
import Projects from './Projects.js'; 
import About from './About.js';
import Contact from './Contact.js'; 
import './App.css';

const App = () => {
  return (
      <> 
        <Navbar />
        <HeroSection />
        <Projects />
        <About />
        <Contact />
      </>
  );
};

export default App;

// Inspiration sites:

// https://diogotc.com/
// https://brittanychiang.com/
// https://joowoonk.ga/
// https://janessagarrow.com/