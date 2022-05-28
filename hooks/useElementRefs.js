import {
  contactSection,
  contactSectionRef,
  contactTitle,
  contactTitleRef,
  contactBlurb,
  contactBlurbRef,
  contactForm,
  contactFormRef,
  contactFooter,
  contactFooterRef,
  homeSection,
  homeSectionRef,
  homeTitle,
  homeTitleRef,
  homeDescription,
  homeDescriptionRef,
  homeFindOutMoreMobileLink,
  homeFindOutMoreMobileLinkRef,
  homeFindOutMoreDesktopLink,
  homeFindOutMoreDesktopLinkRef,
  homeImage,
  homeImageRef,
  pricingSection,
  pricingSectionRef,
  pricingTitle,
  pricingTitleRef,
  pricingCards,
  pricingCardsRef,
  projectsSection,
  projectsSectionsRef,
  projectsTitle,
  projectsTitleRef,
  projectsCards,
  projectsCardsRef,
  servicesSection,
  servicesSectionRef,
  servicesTitle,
  servicesTitleRef,
  servicesPoints,
  servicesPointsRef,
  toolsSection,
  toolsSectionRef,
  toolsTitle,
  toolsTitleRef,
  toolsDescription,
  toolsDescriptionRef,
  toolsIcons,
  toolsIconsRef,
  refElementNames,
} from '../pages';

const useElementRefs = () => {
  const elementRefs = () => {
    let returnObj = {};

    const elementRef = elementName => {
      switch (elementName) {
        case contactSection:
          return contactSectionRef;
        case contactTitle:
          return contactTitleRef;
        case contactBlurb:
          return contactBlurbRef;
        case contactForm:
          return contactFormRef;
        case contactFooter:
          return contactFooterRef;
        case homeSection:
          return homeSectionRef;
        case homeTitle:
          return homeTitleRef;
        case homeDescription:
          return homeDescriptionRef;
        case homeFindOutMoreMobileLink:
          return homeFindOutMoreMobileLinkRef;
        case homeFindOutMoreDesktopLink:
          return homeFindOutMoreDesktopLinkRef;
        case homeImage:
          return homeImageRef;
        case pricingSection:
          return pricingSectionRef;
        case pricingTitle:
          return pricingTitleRef;
        case pricingCards:
          return pricingCardsRef;
        case projectsSection:
          return projectsSectionsRef;
        case projectsTitle:
          return projectsTitleRef;
        case projectsCards:
          return projectsCardsRef;
        case servicesSection:
          return servicesSectionRef;
        case servicesTitle:
          return servicesTitleRef;
        case servicesPoints:
          return servicesPointsRef;
        case toolsSection:
          return toolsSectionRef;
        case toolsTitle:
          return toolsTitleRef;
        case toolsDescription:
          return toolsDescriptionRef;
        case toolsIcons:
          return toolsIconsRef;
        default:
          throw new Error(`Element name '${elementName}' not found in useElementRefs`);
      }
    };

    refElementNames.map(elementName => {
      returnObj[elementName] = elementRef(elementName);
    });

    return returnObj;
  };

  return elementRefs;
};

export default useElementRefs;
