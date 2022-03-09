import { sectionOrder } from '../pages';
import useSectionRef from './useSectionRef';

const useScrollTo = () => {
  const sectionRef = useSectionRef();

  const scrollTo = section => {
    if (!sectionOrder.includes(section)) throw new Error('Unknown section passed to useScrollTo');

    sectionRef(section).current.scrollIntoView();
  };

  return scrollTo;
};

export default useScrollTo;
