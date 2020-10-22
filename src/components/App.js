import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection.js';
import Projects from './Projects.js'; 
import About from './About.js';
import Contact from './Contact.js'; 
import Fade from 'react-reveal/Fade';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const App = () => {
  return (
      <Router> 
        <Route exact path='/'>
          <Navbar />
        <HeroSection />
        <Fade>
          <div className='section-line'> Projects</div>
        </Fade>
        <Projects />
        <Fade>
          <div className='section-line'> About Me</div>
        </Fade>
        <About />
        <Fade>
          <div className='section-line'> Contact</div>
        </Fade>
        <Contact />
        </Route>
        <Route path='/detail-1'>
          <Project1 />
        </Route>
        <Route path='/detail-2'>
          <Project2 />
        </Route>
        <Route path='/detail-3'>
          <Project3 />
        </Route>
      </Router>
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