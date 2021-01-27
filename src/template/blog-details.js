import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { slugify } from '../utils/utilityFunctions';
import Layout from '../components/layout';

const BlogDetails = ({ data }) => {
  const { title, image, tags } = data.markdownRemark.frontmatter;
  const imageSrc = image.childImageSharp;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <div className='blog-details-wrapper rn-section-gap bg-color-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2'>
              <div className='post-image'>
                <Img fluid={imageSrc.fluid} alt={title} />
              </div>
              <div className='post-single-title'>
                <h1 className='post-title'>{title}</h1>
              </div>
              <div
                className='post-content'
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <div className='tag-list d-flex align-items-center'>
                <span>Tags:</span>
                <div className='tags-cloud'>
                  {tags.map((tag) => (
                    <a key={tag} href={`/tag/${slugify(tag)}`}>
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const blogDetailsData = graphql`
  query blogDetailsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        author {
          name
        }
        category
        title
        date(formatString: "MMM Do, YYYY")
        format
        tags
        image {
          childImageSharp {
            fluid(quality: 100, maxHeight: 350, maxWidth: 510) {
              ...GatsbyImageSharpFluid_withWebp
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    }
  }
`;

export default BlogDetails;
