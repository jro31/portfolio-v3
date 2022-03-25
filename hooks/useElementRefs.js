import {
  aboutSection,
  aboutSectionRef,
  aboutTitle,
  aboutTitleRef,
  aboutSkills,
  aboutSkillsRef,
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
  introductionSection,
  introductionSectionRef,
  introductionTitle,
  introductionTitleRef,
  introductionDescription,
  introductionDescriptionRef,
  introductionFindOutMoreMobileLink,
  introductionFindOutMoreMobileLinkRef,
  introductionFindOutMoreDesktopLink,
  introductionFindOutMoreDesktopLinkRef,
  introductionPortrait,
  introductionPortraitRef,
  projectsSection,
  projectsSectionsRef,
  projectsTitle,
  projectsTitleRef,
  projectsCards,
  projectsCardsRef,
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
        case aboutSection:
          return aboutSectionRef;
        case aboutTitle:
          return aboutTitleRef;
        case aboutSkills:
          return aboutSkillsRef;
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
        case introductionSection:
          return introductionSectionRef;
        case introductionTitle:
          return introductionTitleRef;
        case introductionDescription:
          return introductionDescriptionRef;
        case introductionFindOutMoreMobileLink:
          return introductionFindOutMoreMobileLinkRef;
        case introductionFindOutMoreDesktopLink:
          return introductionFindOutMoreDesktopLinkRef;
        case introductionPortrait:
          return introductionPortraitRef;
        case projectsSection:
          return projectsSectionsRef;
        case projectsTitle:
          return projectsTitleRef;
        case projectsCards:
          return projectsCardsRef;
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
