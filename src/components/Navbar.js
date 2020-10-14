import React from "react";
import { Link } from 'react-scroll';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
 
const Projects = () => {
  return (
    <Slide down >
    <div className='navbar'>
        <Fade down delay={500}>
            <div className='nav-name'>Cory Thomas</div>
        </Fade>
        {/* <Slide down delay={500}> */}
        <div className='nav-items'>
        
            <Link 
            activeClass='active'
            to='hero-section'
            spy={ true }
            smooth={ true }
            offset={ 0 }
            duration={ 1000 }
            ><Fade down delay={500}>
                <p>Top</p></Fade>
            </Link>
            
            <Link 
                activeClass='active'
                to='projects-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            ><Fade down delay={800}>
                Projects</Fade>
            </Link>
            
            <Link 
                activeClass='active'
                to='about-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            ><Fade down delay={1100}>
                About Me</Fade>
            </Link>
            
            <Link 
                activeClass='active'
                to='contact-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            ><Fade down delay={1400}>
                Contact</Fade>
            </Link>
        </div>
        {/* </Slide> */}
    </div>
    </Slide>
  )
};
 
export default Projects;