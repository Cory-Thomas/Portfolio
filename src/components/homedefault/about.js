import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
  const aboutQueryData = useStaticQuery(graphql`
    query AboutDefaultQuery {
      homedefaultJson(id: { eq: "about" }) {
        title
        description
        subtitle
        description2
        description3
        downloadButton
        linkBUtton
      }
      file(relativePath: { eq: "images/banner/person-image.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 518, height: 480) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const title = aboutQueryData.homedefaultJson.title;
  const description = aboutQueryData.homedefaultJson.description;
  const description2 = aboutQueryData.homedefaultJson.description2;
  const description3 = aboutQueryData.homedefaultJson.description3;
  const downloadButton = aboutQueryData.homedefaultJson.downloadButton;

  return (
    <div className='rb-about-area about-style rn-section-gap' id='about'>
      <div className='container'>
        <div className='row row--45 align-items-center'>
          <div className='col-lg-10'>
            <div className='inner'>
              <div className='content'>
                <div className='section-title'>
                  <div className='title-wrap'>
                    <h3
                      className='title wow fadeInLeft'
                      data-wow-delay='200ms'
                      data-wow-duration='1000ms'
                    >
                      {title}
                      <span className='bg'>About</span>
                    </h3>
                  </div>

                  {description && (
                    <p
                      className='description wow fadeInLeft'
                      data-wow-delay='200ms'
                      data-wow-duration='1000ms'
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></p>
                  )}
                  {description && (
                    <p
                      className='description wow fadeInLeft'
                      data-wow-delay='200ms'
                      data-wow-duration='1000ms'
                      dangerouslySetInnerHTML={{ __html: description2 }}
                    ></p>
                  )}
                  {description && (
                    <p
                      className='description wow fadeInLeft'
                      data-wow-delay='200ms'
                      data-wow-duration='1000ms'
                      dangerouslySetInnerHTML={{ __html: description3 }}
                    ></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
