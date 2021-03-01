import React from 'react';
import { Link } from 'gatsby';
import Image from '../image';
import Img from 'gatsby-image';

const Projectcard = ({ image, id, title, category, column }) => {
  let projectImg;
  if (image.fixed && typeof image.fixed !== 'function') {
    projectImg = <Img fixed={image.fixed} alt={title} />;
  } else if (image.fluid) {
    projectImg = <Image fluid={image.fluid} alt={title} />;
  } else {
    projectImg = <img src={image.src} alt={title} />;
  }
  return (
    <div
      className={column}
      style={{
        padding: '2%',
      }}
    >
      <div className='portfolio'>
        {title === 'Human Rights First: Asylum Analysis' ? (
          <div className='thumbnail'>
            <Link
              to={
                'https://dev.to/corythomas/helping-out-a-non-profit-organization-as-a-bootcamp-student-h2a'
              }
            >
              {projectImg}
            </Link>
          </div>
        ) : (
          <div className='thumbnail'>
            <Link to={'https://dev.to/corythomas/plant-purpose-4laa'}>
              {projectImg}
            </Link>
          </div>
        )}

        <div className='content'>
          <div className='inner'>
            {title && <h4 className='title'>{title}</h4>}

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <>
                    <p>
                      React application built for a non-profit organization
                      (Human Rights First) that allows its users to analyze
                      court rulings made by judges for specific asylum cases.
                    </p>

                    <p>
                      Worked on a remote cross-functional team of 7, consisting
                      of web and data science developers.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Plant Purpose is a React application and plant management
                      system, which helps plant owners take better care of their
                      plants.
                    </p>
                    <p>
                      Partnered with a web designer for the design side of the
                      site.
                    </p>
                    Designer: Hanina Syed <br />
                    Her LinkedIn:{' '}
                    <Link to='https://www.linkedin.com/in/hanina-syed-020321138/'>
                      LinkedIn Link
                    </Link>
                    <br />
                  </>
                )}
              </span>
            )}

            <br />

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <a
                    href='https://dev.to/corythomas/helping-out-a-non-profit-organization-as-a-bootcamp-student-h2a'
                    style={{ color: 'white' }}
                  >
                    Project Blog/Details [dev.to]
                  </a>
                ) : (
                  <a
                    href='https://dev.to/corythomas/plant-purpose-4laa'
                    style={{ color: 'white' }}
                  >
                    Project Blog/Details [dev.to]
                  </a>
                )}
              </span>
            )}

            <br />

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <a
                    href='https://github.com/Cory-Thomas/human-rights-first-asylum-fe-b'
                    style={{ color: 'white' }}
                  >
                    GitHub
                  </a>
                ) : (
                  <a
                    href='https://github.com/Cory-Thomas/Plant-Purpose'
                    style={{ color: 'white' }}
                  >
                    GitHub
                  </a>
                )}
              </span>
            )}

            <br />

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? null : (
                  <a
                    href='https://plantpurpose.netlify.app/'
                    style={{ color: 'white' }}
                  >
                    Deployed Site
                  </a>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projectcard;
