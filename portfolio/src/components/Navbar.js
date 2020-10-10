import React from "react";
import { Link } from 'react-scroll';
 
const Projects = () => {
  return (
    <div className='navbar'>
        <div>Cory Thomas</div>
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
    </div>
  )
};
 
export default Projects;