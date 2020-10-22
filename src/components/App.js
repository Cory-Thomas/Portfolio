import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection.js';
import Projects from './Projects.js'; 
import About from './About.js';
import Contact from './Contact.js'; 
import Fade from 'react-reveal/Fade';
import './App.css';

const App = () => {
  return (
      <> 
        <Navbar />
        <HeroSection />
        <Fade right>
          <div className='section-line'> Projects</div>
        </Fade>
        <Projects />
        <Fade right>
          <div className='section-line'> About Me</div>
        </Fade>
        <About />
        <Fade right>
          <div className='section-line'> Contact</div>
        </Fade>
        <Contact />
      </>
  );
};

export default App;

// Inspiration sites:

// https://gregives.co.uk/
// https://www.juliacodes.com/
// https://brittanychiang.com/
// https://joowoonk.ga/
// https://janessagarrow.com/
// https://www.kevinn.net/
// https://www.jordanmiller.dev/
// https://diogotc.com/