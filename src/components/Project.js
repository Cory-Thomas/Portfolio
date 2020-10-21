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
        <div className='button-section'>
            <div className='border-1' />

            <div className='upper-button'>
                <div>Project Details</div>
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

        {/* <div className='project-links'>
            <div>Project Details</div>   
            <div>Live Site</div>
            <div>Github Repo</div>
        </div> */}
    </div>
  )
};
 
export default Project;