import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/homedefault/banner';
import About from '../components/homedefault/about';
import Project from '../components/homedefault/project';
import Service from '../components/homedefault/service';
import Contact from '../elements/contact/contact';

const IndexPage = () => (
  <Layout>
    <SEO title='Waxon' />
    <Banner />
    <About />
    <Service />
    <div className='portfolio-id' id='portfolio'>
      <Project />
    </div>
    <Contact />
  </Layout>
);
export default IndexPage;
