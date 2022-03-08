// TODO - Need this still?

import { useSelector } from 'react-redux';

import { sectionOrder } from '../pages';

const useScrollTo = () => {
  const windowHeight = useSelector(state => state.windowDimensions.height);

  const scrollTo = section => {
    const sectionIndex = () => {
      if (sectionOrder.indexOf(section) === -1)
        throw new Error('Unknown section in useScrollTo hook');

      return sectionOrder.indexOf(section);
    };

    window.scrollTo(0, windowHeight * sectionIndex());
  };

  return scrollTo;
};

export default useScrollTo;
