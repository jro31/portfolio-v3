import useSectionDistanceFromTopOfPage from './useSectionDistanceFromTopOfPage';
import { sectionOrder } from '../pages';

const useLiveSection = () => {
  const sectionDistanceFromTopOfPage = useSectionDistanceFromTopOfPage();

  const liveSection = () => {
    let returnSection = sectionOrder[0];

    sectionOrder.slice(1).map(section => {
      if (window.scrollY >= sectionDistanceFromTopOfPage(section)) {
        returnSection = section;
      }
    });

    return returnSection;
  };

  return liveSection;
};

export default useLiveSection;
