import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaSkype,
  FaVimeo,
} from 'react-icons/fa';

const Footer = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  return (
    <footer className='rn-footer-area bg-color-black pt--90 pb--60'>
      <div className='footer-wrapper'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown'
              data-wow-delay='200ms'
              data-wow-duration='0.1s'
            >
              <div className='ft-info'>
                <p>Cory Thomas</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown'
              data-wow-delay='200ms'
              data-wow-duration='0.2s'
            >
              <div className='ft-info'>
                <p>
                  Based In: <br />
                  Chattanooga, Tennessee
                </p>
              </div>
            </div>
            <div
              className='col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown'
              data-wow-delay='200ms'
              data-wow-duration='0.4s'
            >
              <div className='ft-info'>
                <p>
                  Open To:
                  <br />
                  Remote &#38; Relocation
                </p>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 col-sm-6 col-12 mt_md--30 mt_sm--30 wow fadeInDown'
              data-wow-delay='200ms'
              data-wow-duration='0.6s'
            >
              <div className='ft-info'>
                <ul className='social-share'>
                  <li>
                    <a href='https://www.linkedin.com/in/corythomasdev/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='#link'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='back-to-top'>
        <div className='backtop' onClick={handleClick}>
          <span className='top'></span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
