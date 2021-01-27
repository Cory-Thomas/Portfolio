import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/homedefault/banner';
import About from '../components/homedefault/about';
import Service from '../components/homedefault/service';
import BlogPost from '../components/blogPost';
import Contact from '../elements/contact/contact';

const IndexPage = () => (
  <Layout>
    <SEO title='Waxon' />
    <Banner />
    <About />
    <Service />
    <div className='portfolio-id' id='portfolio'>
      <BlogPost />
    </div>
    <Contact />
  </Layout>
);
export default IndexPage;