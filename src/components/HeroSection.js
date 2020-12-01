import React from "react";
import Fade from 'react-reveal/Fade';
import { Linkedin } from '@styled-icons/simple-icons/Linkedin';
import { Github } from '@styled-icons/fa-brands/Github';
import { TwitterSquare } from '@styled-icons/fa-brands/TwitterSquare';
 
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Fade right>
      <div className='hero-content'>
        <div>
          <h2>Hi, my name is</h2>
        </div>
        <div className='hero-name'>
          <h1>Cory Thomas.</h1>
        </div>
        <div className='hero-description'>
          <h2>
            I'm a 
            <span className='hero-word'> Web Developer </span>
             and &nbsp; 
              <span className='word hero-word'>
                <span>Pianist</span>
                <span>Bonsai Enthusiast</span>
                <span>Gamer</span>
                <span>Cat Dad</span>
                <span>VR Enthusiast</span>
              </span>
            </h2>
        </div>
      </div></Fade>
      <div className='rightSide'>
          <img src="https://i.pinimg.com/736x/52/bc/39/52bc3928fd63daa22ebfb555f9ae07dd.jpg" alt="Cory Thomas" />
          <div className='socials'>
            <div className="so">
              <a href="https://www.linkedin.com/in/corythomas92/"><Linkedin className="logo hero-logo"/></a>
            </div>
            <div className="so">
              <a href="https://github.com/Cory-Thomas"><Github className="logo hero-logo"/></a>
            </div>
            <div className="so">
              <a href="https://twitter.com/CoryThomas_"><TwitterSquare className="logo hero-logo"/></a>
            </div>
          </div>
        </div>
    </div>
  )
};
 
export default HeroSection;