// TODO - Should this now be done another way?

import { useSelector } from 'react-redux';

import { darkSections } from '../pages';

const useIsDarkBackground = () => {
  const liveSection = useSelector(state => state.liveSection.liveSection);

  const isDarkBackground = () => darkSections.includes(liveSection);

  return isDarkBackground;
};

export default useIsDarkBackground;
