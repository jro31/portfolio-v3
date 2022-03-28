import {
  contactSection,
  contactSectionRef,
  contactTitle,
  contactTitleRef,
  contactForm,
  contactFormRef,
  contactJethroCodesLink,
  contactJethroCodesLinkRef,
  contactSocialMediaLinks,
  contactSocialMediaLinksRef,
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
  homePortrait,
  homePortraitRef,
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
        case contactForm:
          return contactFormRef;
        case contactJethroCodesLink:
          return contactJethroCodesLinkRef;
        case contactSocialMediaLinks:
          return contactSocialMediaLinksRef;
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
        case homePortrait:
          return homePortraitRef;
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
