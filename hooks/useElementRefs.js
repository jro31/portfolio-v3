import {
  aboutSectionRef,
  aboutSection,
  introductionSectionRef,
  introductionSection,
  projectsSectionsRef,
  projectsSection,
  toolsSectionRef,
  toolsSection,
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
  refElementNames,
} from '../pages';

const useElementRefs = () => {
  const elementRefs = () => {
    let returnObj = {};

    const elementRef = elementName => {
      switch (elementName) {
        case aboutSection:
          return aboutSectionRef;
        case introductionSection:
          return introductionSectionRef;
        case projectsSection:
          return projectsSectionsRef;
        case toolsSection:
          return toolsSectionRef;
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
