import React from 'react';
import { FiList, FiUser } from 'react-icons/fi';
import Layout from '../components/layout';

const ProjectDetails = ({ data }) => {
  const projectData = data.projectJson;
  return (
    <Layout>
      <div className='rn-project-details-area rn-section-gap bg-color-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner'>
                <div className='portfolio-content'>
                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                      <div className='content-left'>
                        <div className='page-top'>
                          <h1 className='title_holder'>{projectData.title}</h1>
                        </div>
                        <h3 className='mt--20'>Details</h3>
                        <ul className='list_holder'>
                          <li>
                            <span className='icon'>
                              <FiList />
                              Category:
                            </span>
                            <span className='projectinfo'>
                              {projectData.category}
                            </span>
                          </li>
                          <li>
                            <span className='icon'>
                              <FiUser />
                              Client:
                            </span>
                            <span className='projectinfo'>
                              {projectData.client}
                            </span>
                          </li>
                          {/* <li>
                            <span className='icon'>
                              <FiInstagram />
                              Images by:
                            </span>
                            <span className='projectinfo'>
                              {projectData.imgesBY}
                            </span>
                          </li> */}
                        </ul>
                        <p className='mt--20'>
                          {/* {projectData.body} */}
                          <p>
                            Web application for a nonprofit that aggregates data
                            on asylum cases, allows users to explore that data,
                            and predict and visualize how a judge might rule on
                            a specific asylum case—as well as what specific
                            elements of an asylum case seem to most impact a
                            favorable or unfavorable ruling.
                          </p>
                          <p>
                            Tech Stack: React | Okta | Ant Design | Axios |
                            Styled-Components | Node/Express | Postgres
                          </p>
                          - Functioned as a full-stack web developer on a remote
                          cross-functional team of 7, consisting of web and data
                          science developers <br />- Implemented Okta into the
                          application to control and secure user authentication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    projectJson(id: { eq: $id }) {
      id
      title
      body
      category
      client
      imgesBY
      featured_image {
        childImageSharp {
          fluid(maxHeight: 1000, maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            presentationHeight
            presentationWidth
          }
        }
      }
      features {
        image {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`;
export default ProjectDetails;
