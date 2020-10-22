import React from "react";
import Fade from 'react-reveal/Fade';
import { ReactLogo } from '@styled-icons/fa-brands/ReactLogo';
import { Html5 } from '@styled-icons/fa-brands/Html5';
import { Css3Alt } from '@styled-icons/fa-brands/Css3Alt';
import { Redux } from '@styled-icons/simple-icons/Redux';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Sass } from '@styled-icons/simple-icons/Sass';
import { Jest } from '@styled-icons/simple-icons/Jest';
import { Cypress } from '@styled-icons/simple-icons/Cypress';
import { Git } from '@styled-icons/simple-icons/Git';
import { Github } from '@styled-icons/fa-brands/Github';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
 
const About = () => {
  return (
    <div className="about-section">
      <Fade up>
      <section className='about-wrapper'>
        <div className='bio'>
          <p>Hello! My name is Cory Thomas, a web developer based in Chattanooga, Tennessee.</p>
          <p>
            Interestingly, my journey into programming started because of the Oculus Rift Development Kit 1 VR headset. 
            I would browse the Oculus forums and noticed several people discussing code which made me want to dive into C++ in 2013.
          
            Eventually, I went to college for Computer Science but took a hiatus after two years because I was unsure of what I wanted to specialize in. 
            I remembered my time in high school when I was in the Web Development club and so I started to dabble with it again.
            Unfortunately, I didn't know that I enjoyed web development back then since I didn't take the club seriously enough.
          
            In contrast, I fully committed myself by self-studying for over a year and knew this field was absolutely for me!
            As a result, I attended Lambda School full time as a full-stack web student and mentor focusing on React, Node, and computer science.
          </p>
          <p>
            This journey has been extremely satisfying so far and fulfills my desire to always learn something new and challenging.
          </p>
        </div>
        <div className='skills-wrapper'>
          {/* <div>Skills: </div> */}
          <section className='about-skills'>
            <div>
              <div><Javascript className='logo'/> JavaScript</div>
              <div><Html5 className='logo'/> HTML5</div>
              <div><Css3Alt className='logo'/> CSS3</div>
              <div><Sass className='logo'/> Sass</div>
              <div><StyledComponents className='logo'/> Styled Components</div>
            </div>
            <div>
              <div><ReactLogo className='logo'/> React</div>
              <div><ReactLogo className='logo'/> React Hooks</div>
            
              <div><ReactLogo className='logo'/> Context API</div>
              <div><Redux className='logo'/> Redux</div>
            </div>
            <div>
              <div><Jest className='logo'/> Jest</div>
              <div><Cypress className='logo'/> Cypress</div>
              <div><ReactLogo className='logo'/> React Testing Library</div>
              <div><Git className='logo'/> Git</div>
              <div><Github className='logo'/> GitHub</div>
            </div>
          </section>
        </div>
      </section>
      </Fade>
    </div>
  )
};
 
export default About;