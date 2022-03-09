import { Fragment, useRef } from 'react';
import Head from 'next/head';

import About from '../components/homepage-sections/about/About';
import Introduction from '../components/homepage-sections/introduction/Introduction';
import Projects from '../components/homepage-sections/projects/Projects';
import Tools from '../components/homepage-sections/tools/Tools';

export const aboutSection = 'about';
export let aboutRef;

export const introductionSection = 'introduction';
export let introductionRef;

export const projectsSection = 'projects';
export let projectsRef;

export const toolsSection = 'tools';
export let toolsRef;

export const sectionOrder = [introductionSection, aboutSection, toolsSection, projectsSection];

const HomePage = () => {
  aboutRef = useRef();
  introductionRef = useRef();
  projectsRef = useRef();
  toolsRef = useRef();

  const component = componentName => {
    switch (componentName) {
      case aboutSection:
        return <About key={`${componentName}-component`} />;
      case introductionSection:
        return <Introduction key={`${componentName}-component`} />;
      case projectsSection:
        return <Projects key={`${componentName}-component`} />;
      case toolsSection:
        return <Tools key={`${componentName}-component`} />;
      default:
        throw new Error('Unknown componentName in component function of HomePage');
    }
  };

  return (
    <Fragment>
      <Head>
        {/* TODO - Update this */}
        <title>Jethro Williams - Software Engineer</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      {sectionOrder.map(section => component(section))}
    </Fragment>
  );
};

export default HomePage;
