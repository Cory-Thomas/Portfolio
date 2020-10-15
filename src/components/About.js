import React from "react";
 
const About = () => {
  return (
    <div className="about-section">
      <section className='about-wrapper'>
        <div>
          <p>Hello! My name is Cory Thomas, a web developer based in Chattanooga, Tennessee.</p>
          <p></p>
        </div>
        <div className='skills-wrapper'>
          <div>Skills</div>
          <section className='about-skills'>
            <div>
              <div>JavaScript</div>
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Sass</div>
            </div>
            <div>
              <div>React</div>
              <div>React Hooks</div>
              <div>Redux</div>
              <div>Context API</div>
            </div>
            <div>
              <div>Jest</div>
              <div>Cypress</div>
              <div>React Testing Library</div>
              <div>Git/GitHub</div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
};
 
export default About;