import React from 'react';
import { Link } from "react-router-dom";

const Project = ({ image, title, description, link, id }) => {
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
        <div className='button-section'>
            <div className='border-1' />

            <div className='upper-button'>
                <Link to={`/detail-${id}`}><div>Project Details</div></Link>
            </div>

            <div className='border-wrapper'>
                <div className='border-2' />
                <div className='border-5' />
                <div className='border-3' />
            </div>
            

            <div className='bottom-buttons'>
                <div className='live-site'>
                    Live Site
                </div>

                <div className='border-4' />

                <div className='github-repo'>
                    Github Repo
                </div>
            </div>
        </div>
    </div>
  )
};
 
export default Project;