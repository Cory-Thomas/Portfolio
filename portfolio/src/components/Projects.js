import React from "react";
// import { BrowserRouter } from 'react-router-dom'; 
import Project from './Project';
import Slide from 'react-reveal/Slide';

const Projects = () => {
  const projectList = [
    {
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 1', 
      description: 'This is a description of the project describing what it/s core purpose is', 
      link: '#' 
    },
    {
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 2', 
      description: 'This is a description of the project describing what it/s core purpose is This is a description of the project describing what it/s core purpose is ', 
      link: '#' 
    },
    {
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 3', 
      description: 'This is a description of the project describing what it/s core purpose is This is a description of the project describing what it/s core purpose is This is a description of the project describing what it/s core purpose is', 
      link: '#' 
    }
  ];

  return (
    <div className="projects-section">
      <div className='projects-title'>
        <h2>Projects </h2>
      </div>
      

      <Slide left>
      <section className="projects">
        { projectList.map(({ image, title, description, link }) => {
          return (
            <>
              <Project  
                image={ image }
                title={ title }
                description={ description }
                link={ link }
              />
            </>
          )
        })}
      </section>
      </Slide>
      
    </div>
  )
};
 
export default Projects;