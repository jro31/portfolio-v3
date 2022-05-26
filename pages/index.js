import { Fragment, useRef } from 'react';
import Head from 'next/head';

import Services from '../components/homepage-sections/services/Services';
import Home from '../components/homepage-sections/home/Home';
import Projects from '../components/homepage-sections/projects/Projects';
import Tools from '../components/homepage-sections/tools/Tools';
import Contact from '../components/homepage-sections/contact/Contact';
import Pricing from '../components/homepage-sections/pricing/Pricing';

export const contactSection = 'contact';
export let contactSectionRef;
export const homeSection = 'home';
export let homeSectionRef;
export const pricingSection = 'pricing';
export let pricingSectionRef;
export const projectsSection = 'projects';
export let projectsSectionsRef;
export const servicesSection = 'services';
export let servicesSectionRef;
export const toolsSection = 'tools';
export let toolsSectionRef;

export const sectionOrder = [
  homeSection,
  servicesSection,
  toolsSection,
  projectsSection,
  pricingSection,
  contactSection,
];
export const darkSections = [homeSection, toolsSection, projectsSection];

export const contactTitle = 'contact-title';
export let contactTitleRef;
export const contactBlurb = 'contact-blurb';
export let contactBlurbRef;
export const contactForm = 'contact-form';
export let contactFormRef;
export const contactFooter = 'contact-footer';
export let contactFooterRef;
const contactElements = [contactTitle, contactBlurb, contactForm, contactFooter];

export const homeTitle = 'home-title';
export let homeTitleRef;
export const homeDescription = 'home-description';
export let homeDescriptionRef;
export const homeFindOutMoreDesktopLink = 'home-find-out-more-desktop-link';
export let homeFindOutMoreDesktopLinkRef;
export const homeFindOutMoreMobileLink = 'home-find-out-more-mobile-link';
export let homeFindOutMoreMobileLinkRef;
export const homePortrait = 'home-portrait';
export let homePortraitRef;
const homeElements = [
  homeTitle,
  homeDescription,
  homeFindOutMoreMobileLink,
  homeFindOutMoreDesktopLink,
  homePortrait,
];

export const pricingTitle = 'pricing-title';
export let pricingTitleRef;
export const pricingCards = 'pricing-cards';
export let pricingCardsRef;
const pricingElements = [pricingTitle, pricingCards];

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
  ...homeElements,
  ...pricingElements,
  ...projectsElements,
  ...servicesElements,
  ...toolsElements,
];

const appTitle = 'Jethro Williams - Web Development Services';
const appDescription =
  'We specialise in building personal and small business websites and APIs. Need a new web application or updates to your existing one? Contact us below to get started.';
const baseUrl = 'https://jethrowilliams.com';
const socialMediaImagePath = `${baseUrl}/images/home-screenshot.png`;

const HomePage = () => {
  contactSectionRef = useRef();
  homeSectionRef = useRef();
  pricingSectionRef = useRef();
  projectsSectionsRef = useRef();
  servicesSectionRef = useRef();
  toolsSectionRef = useRef();

  contactTitleRef = useRef();
  contactBlurbRef = useRef();
  contactFormRef = useRef();
  contactFooterRef = useRef();

  homeTitleRef = useRef();
  homeDescriptionRef = useRef();
  homeFindOutMoreMobileLinkRef = useRef();
  homeFindOutMoreDesktopLinkRef = useRef();
  homePortraitRef = useRef();

  pricingTitleRef = useRef();
  pricingCardsRef = useRef();

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
      case homeSection:
        return <Home key={key} />;
      case pricingSection:
        return <Pricing key={key} />;
      case projectsSection:
        return <Projects key={key} />;
      case servicesSection:
        return <Services key={key} />;
      case toolsSection:
        return <Tools key={key} />;
      default:
        throw new Error(
          `Unknown componentName ${componentName} in component() function of HomePage`
        );
    }
  };

  return (
    <Fragment>
      <Head>
        <title>{appTitle}</title>
        <meta name='description' content={appDescription} />
        <meta
          name='keywords'
          content='software engineer, web dev, developer, ruby on rails, react js, next js, ruby on rails developer, react developer, freelance'
        />

        {/* Facebook */}
        <meta property='og:title' content={appTitle} />
        <meta property='og:description' content={appDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:image' content={socialMediaImagePath} />

        {/* Twitter */}
        <meta name='twitter:title' content={appTitle} />
        <meta name='twitter:site' content='@jethro_williams' />
        <meta name='twitter:description' content={appDescription} />
        <meta name='twitter:image' content={socialMediaImagePath} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      {sectionOrder.map(section => component(section))}
    </Fragment>
  );
};

export default HomePage;

// TODO - Add getStaticProps?
