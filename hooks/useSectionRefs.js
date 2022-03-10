import {
  aboutRef,
  aboutSection,
  introductionRef,
  introductionSection,
  projectsRef,
  projectsSection,
  toolsRef,
  toolsSection,
  sectionOrder,
} from '../pages';

const useSectionRefs = () => {
  const sectionRefs = () => {
    let returnObj = {};

    const sectionRef = section => {
      switch (section) {
        case aboutSection:
          return aboutRef;
        case introductionSection:
          return introductionRef;
        case projectsSection:
          return projectsRef;
        case toolsSection:
          return toolsRef;
        default:
          throw new Error(`Section '${section}' not found in useSectionRefs`);
      }
    };

    sectionOrder.map(section => {
      returnObj[section] = sectionRef(section);
    });

    return returnObj;
  };

  return sectionRefs;
};

export default useSectionRefs;
