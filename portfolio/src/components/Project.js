import React from 'react';

const Project = ({ image, title, description, link }) => {
  return (
    <div className="project">
        <div>
            <div className="project-image">
                <img src={ image } alt="Project screenshot"/>
            </div>
            <div className="project-title">
                <h3>{ title }</h3>
            </div>
            <div className="project-description">
                <p>{ description }</p>
            </div>
        </div>
        <div className='project-links'>
            <div>Project Details</div>   
            <div>Live Site</div>
            <div>Github Repo</div>
        </div>
    </div>
  )
};
 
export default Project;