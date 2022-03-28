// TODO - Add a 'Principles' section, which lists my coding principles/philosophies, e.g: Responsive, mobile-first design built to work no matter the device or browser, clean code written to be easily understandable, maintainable, scalable and reusable etc?

import { Fragment, useRef } from 'react';
import Head from 'next/head';

import Services from '../components/homepage-sections/services/Services';
import Introduction from '../components/homepage-sections/introduction/Introduction';
import Projects from '../components/homepage-sections/projects/Projects';
import Tools from '../components/homepage-sections/tools/Tools';
import Contact from '../components/homepage-sections/contact/Contact';

export const contactSection = 'contact';
export let contactSectionRef;
export const introductionSection = 'introduction';
export let introductionSectionRef;
export const projectsSection = 'projects';
export let projectsSectionsRef;
export const servicesSection = 'services';
export let servicesSectionRef;
export const toolsSection = 'tools';
export let toolsSectionRef;

export const sectionOrder = [
  introductionSection,
  servicesSection,
  toolsSection,
  projectsSection,
  contactSection,
];
export const darkSections = [introductionSection, toolsSection, projectsSection, contactSection];

export const contactTitle = 'contact-title';
export let contactTitleRef;
export const contactForm = 'contact-form';
export let contactFormRef;
export const contactJethroCodesLink = 'contact-jethro-codes-link';
export let contactJethroCodesLinkRef;
export const contactSocialMediaLinks = 'contact-social-media-links';
export let contactSocialMediaLinksRef;
const contactElements = [
  contactTitle,
  contactForm,
  contactJethroCodesLink,
  contactSocialMediaLinks,
];

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

export const projectsTitle = 'projects-title';
export let projectsTitleRef;
export const projectsCards = 'projects-cards';
export let projectsCardsRef;
const projectsElements = [projectsTitle, projectsCards];

export const servicesTitle = 'services-title';
export let servicesTitleRef;
export const servicesPoints = 'services-points';
export let servicesPointsRef;
const servicesElements = [servicesTitle, servicesPoints];

export const toolsTitle = 'tools-title';
export let toolsTitleRef;
export const toolsDescription = 'tools-description';
export let toolsDescriptionRef;
export const toolsIcons = 'tools-icons';
export let toolsIconsRef;
const toolsElements = [toolsTitle, toolsDescription, toolsIcons];

export const refElementNames = [
  ...sectionOrder,
  ...contactElements,
  ...introductionElements,
  ...projectsElements,
  ...servicesElements,
  ...toolsElements,
];

const HomePage = () => {
  contactSectionRef = useRef();
  introductionSectionRef = useRef();
  projectsSectionsRef = useRef();
  servicesSectionRef = useRef();
  toolsSectionRef = useRef();

  contactTitleRef = useRef();
  contactFormRef = useRef();
  contactJethroCodesLinkRef = useRef();
  contactSocialMediaLinksRef = useRef();

  introductionTitleRef = useRef();
  introductionDescriptionRef = useRef();
  introductionFindOutMoreMobileLinkRef = useRef();
  introductionFindOutMoreDesktopLinkRef = useRef();
  introductionPortraitRef = useRef();

  projectsTitleRef = useRef();
  projectsCardsRef = useRef();

  servicesTitleRef = useRef();
  servicesPointsRef = useRef();

  toolsTitleRef = useRef();
  toolsDescriptionRef = useRef();
  toolsIconsRef = useRef();

  const component = componentName => {
    const key = `${componentName}-component`;

    switch (componentName) {
      case contactSection:
        return <Contact key={key} />;
      case introductionSection:
        return <Introduction key={key} />;
      case projectsSection:
        return <Projects key={key} />;
      case servicesSection:
        return <Services key={key} />;
      case toolsSection:
        return <Tools key={key} />;
      default:
        throw new Error('Unknown componentName in component function of HomePage');
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Jethro Williams - Software Engineer</title>
        <meta
          name='description'
          content='Need a software engineer to build your web application? Contact me to find out about working together.'
        />
        <meta
          name='keywords'
          content='software engineer, web dev, developer, ruby on rails, react js, next js, ruby on rails developer, react developer, freelance'
        />

        {/* Facebook */}
        {/* TODO - Test these once on Vercel - https://developers.facebook.com/tools/debug/ */}
        <meta property='og:title' content='Jethro Williams - Software Engineer' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://jethrowilliams.com' />
        <meta property='og:image' content='/images/self-portrait.png' />

        {/* Twitter */}
        {/* TODO - Test these */}
        <meta name='twitter:title' content='Jethro Williams - Software Engineer' />
        <meta name='twitter:site' content='@jethro_williams' />
        <meta
          name='twitter:description'
          content='Need a software engineer to build your web application? Contact me to find out about working together.'
        />
        <meta name='twitter:image' content='/images/self-portrait.png' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      {sectionOrder.map(section => component(section))}
    </Fragment>
  );
};

export default HomePage;
