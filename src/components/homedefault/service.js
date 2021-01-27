import React from 'react';
import { FiMonitor, FiDatabase } from 'react-icons/fi';
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineTool } from 'react-icons/ai';

const Service = () => {
  return (
    <div className='rn-service-area rn-section-gapBottom'>
      {/* Start Service Area  */}
      <div className='rn-service-area'>
        <div className='container'>
          <div className='row'>
            {/* Start Single Service  */}
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div
                className='service wow fadeInLeft'
                data-wow-delay='200ms'
                data-wow-duration='1000ms'
              >
                <div className='inner'>
                  <div className='icon'>
                    <FiMonitor />
                  </div>
                  <div className='content'>
                    <h4 className='title'>Front-End</h4>
                    <p>
                      JavaScript, HTML5, CSS3, SASS, Styled Components, React,
                      React Hooks, Context API, Redux
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}

            {/* Start Single Service  */}
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div
                className='service wow fadeInLeft'
                data-wow-delay='200ms'
                data-wow-duration='1000ms'
              >
                <div className='inner'>
                  <div className='icon'>
                    <FiDatabase />
                  </div>
                  <div className='content'>
                    <h4 className='title'>Back-End</h4>
                    <p>Node, Express, Postgres, SQLite</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}

            {/* Start Single Service  */}
            <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <div
                className='service wow fadeInLeft'
                data-wow-delay='200ms'
                data-wow-duration='1000ms'
              >
                <div className='inner'>
                  <div className='icon'>
                    <AiOutlineTool />
                  </div>
                  <div className='content'>
                    <h4 className='title'>Tools</h4>
                    <p>
                      Git, GitHub, Jest, Cypress, React Testing Library, Visual
                      Studio Code, Postman, Zoom, Slack
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Service  */}
          </div>
        </div>
      </div>
      {/* End Service Area  */}
    </div>
  );
};

export default Service;
