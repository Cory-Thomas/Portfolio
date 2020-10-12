import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection.js';
import Projects from './Projects.js'; 
import About from './About.js';
import Contact from './Contact.js'; 
import './App.css';
import { SportsRugbySharp } from '@material-ui/icons';

const App = () => {
  return (
      <> 
        <Navbar />
        <HeroSection />
        
          <div className='section-line'></div >
          
        <Projects />
        <div className='section-line' >About Me</div>
        <About />
        <div className='section-line'>Contact</div>
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