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
        <div className='thumbnail'>
          <Link to={`/project/${id}`}>{projectImg}</Link>
        </div>
        <div className='content'>
          <div className='inner'>
            {title && (
              <h4 className='title'>
                <Link to={`/project/${id}`}>{title}</Link>
              </h4>
            )}

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <p>
                    React application built for a non-profit organization (Human
                    Rights First) that allows its users to analyze court rulings
                    made by judges for specific asylum cases.
                    <br />
                    ***WARNING*** this site is constantly being updated by new
                    subsequent teams
                  </p>
                ) : (
                  <>
                    <p>
                      Plant Purpose is a React application and plant management
                      system, which helps plant owners take better care of their
                      plants.
                    </p>
                    <p>
                      This has been a very interesting and fun project for me
                      because I built the application from scratch and also
                      partnered with a web designer for the design side of the
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
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <a
                    href='https://b.humanrightsfirstasylum.dev/'
                    style={{ color: 'white' }}
                  >
                    Deployed Site
                  </a>
                ) : (
                  <a
                    href='https://plantpurpose.netlify.app/'
                    style={{ color: 'white' }}
                  >
                    Deployed Site
                  </a>
                )}
              </span>
            )}

            <br />
            <br />

            {category && (
              <span className='category'>
                {title === 'Human Rights First: Asylum Analysis' ? (
                  <>
                    <div>
                      <strong>Login Credentials</strong>
                      <br />
                      Username: llama001@maildrop.cc <br />
                      Password: Test001Test
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <strong>Login Credentials</strong>
                      <br />
                      Username: guest <br />
                      Password: guest
                    </div>
                  </>
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
