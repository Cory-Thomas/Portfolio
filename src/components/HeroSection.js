import React from "react";
 
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className='hero-content'>
        <div>
          <h2>Hi, my name is</h2>
        </div>
        <div className='hero-name'>
          <h1>Cory Thomas.</h1>
        </div>
        <div className='hero-description'>
          <h2>
            I'm a 
            <span className='hero-word'> Web Developer </span>
             and &nbsp; 
              <span className='word hero-word'>
                <span>Pianist</span>
                <span>Bonsai Enthusiast</span>
                <span>Gamer</span>
                <span>Cat Dad</span>
              </span>
             
             {/* <span className='hero-word'> multipotentialite </span>
              (many interests). */}
            </h2>
        </div>
        {/* <div>Skill icons?</div> */}
      </div>
    </div>
  )
};
 
export default HeroSection;