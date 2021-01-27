import React from 'react';
import { Link } from 'gatsby';
import { slugify } from '../utils/utilityFunctions';
import Image from '../elements/image';

const Blog = ({
  title,
  date,
  author,
  path,
  image,
  excerpt,
  category,
  github,
}) => {
  return (
    <div className='content-block'>
      <div className='post-thubnail'>
        {image && (
          <Link to={`/${path}`}>
            <Image fluid={image} alt={title} />
          </Link>
        )}
      </div>

      <div className='post-content'>
        <div className='blog-meta'>
          {date && <span className='date'>{date}</span>}
          {author && (
            <span className='author'>
              By
              <Link className='author-name' to={`/author/${slugify(author)}`}>
                {author}
              </Link>
            </span>
          )}
          {category && (
            <span className='category'>
              <Link to={`/category/${slugify(category)}`}>{category}</Link>
            </span>
          )}
        </div>
        {title && (
          <h3 className='title'>
            <Link to={`/${path}`}>{title}</Link>
          </h3>
        )}
        {excerpt && <p className='description'>{excerpt}</p>}
        <div className='read-more'>
          <Link to={`/${path}`}>
            <span>Project Details</span>
          </Link>
          <br />
          <Link to={`/${path}`}>
            <span>Live Site</span>
          </Link>
          <br />
          {/* {title === 'Human Rights First: Asylum Analysis' ? 
              <div>hey</div>
          
          } */}
          <Link to={`/${github}`}>
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Blog;
