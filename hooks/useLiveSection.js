import useElementDistanceFromTopOfPage from './useElementDistanceFromTopOfPage';
import { sectionOrder } from '../pages';

const useLiveSection = () => {
  const elementDistanceFromTopOfPage = useElementDistanceFromTopOfPage();

  const liveSection = () => {
    let returnSection = sectionOrder[0];

    sectionOrder.slice(1).map(section => {
      if (window.scrollY >= elementDistanceFromTopOfPage(section)) {
        returnSection = section;
      }
    });

    return returnSection;
  };

  return liveSection;
};

export default useLiveSection;
