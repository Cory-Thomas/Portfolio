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
          <p>
            Interestingly, my journey into programming started because of the Oculus Rift Development Kit 1 VR headset. 
            I would browse the Oculus forums and noticed several people discussing code which made me want to dive into C++ in 2013.
            Eventually, I went to college for Computer Science but took a hiatus after two years because I was unsure of what I wanted to specialize in. 
            I remembered my time in high school when I was in the Web Development club and so I started to dabble with it again.
            Unfortunately, I didn't know that I enjoyed web development back then since I didn't take the club seriously enough.
            In contrast, I fully committed myself by self-studying for over a year and knew this field was absolutely for me!
            As a result, I attended Lambda School full time as a full-stack web student and mentor focusing on React, Node, and computer science.
            This journey has been extremely satisfying so far and fulfills my desire to always learn something new and challenging.
          </p>
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