import { Fragment, useRef } from 'react';
import Head from 'next/head';

import About from '../components/homepage-sections/about/About';
import Introduction from '../components/homepage-sections/introduction/Introduction';
import Projects from '../components/homepage-sections/projects/Projects';
import Tools from '../components/homepage-sections/tools/Tools';
import Contact from '../components/homepage-sections/contact/Contact';

export const aboutSection = 'about';
export let aboutSectionRef;
export const contactSection = 'contact';
export let contactSectionRef;
export const introductionSection = 'introduction';
export let introductionSectionRef;
export const projectsSection = 'projects';
export let projectsSectionsRef;
export const toolsSection = 'tools';
export let toolsSectionRef;

export const sectionOrder = [
  introductionSection,
  aboutSection,
  toolsSection,
  projectsSection,
  contactSection,
];
export const darkSections = [introductionSection, toolsSection, projectsSection];

export const introductionTitle = 'introduction-title';
export let introductionTitleRef;
export const introductionDescription = 'introduction-description';
export let introductionDescriptionRef;
export const introductionFindOutMoreMobileLink = 'introduction-find-out-more-mobile-link';
export let introductionFindOutMoreMobileLinkRef;
export const introductionFindOutMoreDesktopLink = 'introduction-find-out-more-desktop-link';
export let introductionFindOutMoreDesktopLinkRef;
export const introductionPortrait = 'introduction-portrait';
export let introductionPortraitRef;
const introductionElements = [
  introductionTitle,
  introductionDescription,
  introductionFindOutMoreMobileLink,
  introductionFindOutMoreDesktopLink,
  introductionPortrait,
];

export const aboutTitle = 'about-title';
export let aboutTitleRef;
export const aboutSkills = 'about-skills';
export let aboutSkillsRef;
const aboutElements = [aboutTitle, aboutSkills];

export const toolsTitle = 'tools-title';
export let toolsTitleRef;
export const toolsDescription = 'tools-description';
export let toolsDescriptionRef;
export const toolsIcons = 'tools-icons';
export let toolsIconsRef;
const toolsElements = [toolsTitle, toolsDescription, toolsIcons];

export const refElementNames = [
  ...sectionOrder,
  ...introductionElements,
  ...aboutElements,
  ...toolsElements,
];

const HomePage = () => {
  aboutSectionRef = useRef();
  contactSectionRef = useRef();
  introductionSectionRef = useRef();
  projectsSectionsRef = useRef();
  toolsSectionRef = useRef();

  introductionTitleRef = useRef();
  introductionDescriptionRef = useRef();
  introductionFindOutMoreMobileLinkRef = useRef();
  introductionFindOutMoreDesktopLinkRef = useRef();
  introductionPortraitRef = useRef();

  aboutTitleRef = useRef();
  aboutSkillsRef = useRef();

  toolsTitleRef = useRef();
  toolsDescriptionRef = useRef();
  toolsIconsRef = useRef();

  const component = componentName => {
    const key = `${componentName}-component`;

    switch (componentName) {
      case aboutSection:
        return <About key={key} />;
      case contactSection:
        return <Contact key={key} />;
      case introductionSection:
        return <Introduction key={key} />;
      case projectsSection:
        return <Projects key={key} />;
      case toolsSection:
        return <Tools key={key} />;
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
