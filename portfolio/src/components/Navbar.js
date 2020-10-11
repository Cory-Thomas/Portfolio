import React from "react";
import { Link } from 'react-scroll';
import Slide from 'react-reveal/Slide';
 
const Projects = () => {
  return (
    <Slide down >
    <div className='navbar'>
        <Slide down delay={500}>
            <div>Cory Thomas</div>
        </Slide>
        <Slide down delay={500}>
        <div className='nav-items'>
            <Link 
            activeClass='active'
            to='hero-section'
            spy={ true }
            smooth={ true }
            offset={ 0 }
            duration={ 1000 }
            >
                Top
            </Link>
            <Link 
                activeClass='active'
                to='projects-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            >
                Projects
            </Link>
            <Link 
                activeClass='active'
                to='about-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            >
                About Me
            </Link>
            <Link 
                activeClass='active'
                to='contact-section'
                spy={ true }
                smooth={ true }
                offset={ 0 }
                duration={ 1000 }
            >
                Contact
            </Link>
        </div>
        </Slide>
    </div>
    </Slide>
  )
};
 
export default Projects;