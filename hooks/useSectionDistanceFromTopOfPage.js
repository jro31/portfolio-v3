import useSectionRef from './useSectionRef';

const useSectionDistanceFromTopOfPage = () => {
  const sectionRef = useSectionRef();

  const sectionDistanceFromTopOfPage = section => {
    return window.scrollY + sectionRef(section).current.getBoundingClientRect().top;
  };

  return sectionDistanceFromTopOfPage;
};

export default useSectionDistanceFromTopOfPage;
