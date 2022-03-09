// import { useSelector } from 'react-redux';
import useSectionRef from './useSectionRef';

const useSectionDistanceFromTopOfPage = () => {
  // const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const sectionRef = useSectionRef();

  const sectionDistanceFromTopOfPage = section => {
    return window.scrollY + sectionRef(section).current.getBoundingClientRect().top;
  };

  return sectionDistanceFromTopOfPage;
};

export default useSectionDistanceFromTopOfPage;
