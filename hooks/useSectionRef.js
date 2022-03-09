import useSectionRefs from './useSectionRefs';

const useSectionRef = () => {
  const sectionRefs = useSectionRefs();

  const sectionRef = section => {
    const refsObj = sectionRefs();

    if (!refsObj[section]) throw new Error('Unrecognised section passed to useSectionRef');

    return refsObj[section];
  };

  return sectionRef;
};

export default useSectionRef;
