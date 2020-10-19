import React from "react";
import JavaScript from '../pictures/javascript.svg';
import css from '../pictures/css-3.svg';
import git from '../pictures/git-icon.svg';
import html from '../pictures/html-5.svg';
import react from '../pictures/reactlogo.svg';
import redux from '../pictures/reduxlogo.png';
import sass from '../pictures/sass-1.svg';
 
const About = () => {
  return (
    <div className="about-section">
      <section className='about-wrapper'>
        <div>
          <p>Hello! My name is Cory Thomas, a web developer based in Chattanooga, Tennessee.</p>
          <p></p>
        </div>
        <div className='skills-wrapper'>
          <div>Here are some skills that I practice regularly: </div>
          <section className='about-skills'>
            <div>
              <div><img src={JavaScript} alt='' className='logo'/> JavaScript</div>
              <div><img src={html} alt='' className='logo'/> HTML5</div>
              <div><img src={css} alt='' className='logo'/> CSS3</div>
              <div><img src={sass} alt='' className='logo'/> Sass</div>
            </div>
            <div>
              <div><img src={react} alt='' className='logo'/> React</div>
              <div><img src={react} alt='' className='logo'/> React Hooks</div>
            
              <div><img src={react} alt='' className='logo'/> Context API</div>
              <div><img src={redux} alt='' className='logo'/> Redux</div>
            </div>
            <div>
              <div><img src={JavaScript} alt='' className='logo'/> Jest</div>
              <div><img src={JavaScript} alt='' className='logo'/> Cypress</div>
              <div><img src={JavaScript} alt='' className='logo'/> React Testing Library</div>
              <div><img src={git} alt='' className='logo'/> Git/GitHub</div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
};
 
export default About;