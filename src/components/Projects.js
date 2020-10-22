import React from "react";
// import { BrowserRouter } from 'react-router-dom'; 
import Project from './Project';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 1', 
      description: 'This is a description of the project describing what i\'s core purpose is', 
      link: '#' 
    },
    {
      id: 2,
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 2', 
      description: 'This is a description of the project describing what it\'s core purpose is This is a description of the project describing what it\'s core purpose is ', 
      link: '#' 
    },
    {
      id: 3,
      image: 'https://uploads-ssl.webflow.com/571d965d75e0008b09b19bc5/5bac149821b828ff768f64c5_framed%20and%20matted%20thumb.png', 
      title: 'Project 3', 
      description: 'This is a description of the project describing what it\'s core purpose is This is a description of the project describing what it\'s core purpose is This is a description of the project describing what it\'s core purpose is', 
      link: '#' 
    }
  ];

  return (
    <div className="projects-section">
      <Fade left>
      <section className="projects">
        { projectList.map(({ image, title, description, link, id }) => {
          return (
            <>
              <Project  
                image={ image }
                title={ title }
                description={ description }
                link={ link }
                id={ id }
              />
            </>
          )
        })}
      </section>
      </Fade>
      
    </div>
  )
};
 
export default Projects;