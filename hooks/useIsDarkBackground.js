import { useSelector } from 'react-redux';

import { introductionSection } from '../pages';

const useIsDarkBackground = () => {
  const liveSection = useSelector(state => state.liveSection.liveSection);
  const darkSections = [introductionSection];

  const isDarkBackground = () => darkSections.includes(liveSection);

  return isDarkBackground;
};

export default useIsDarkBackground;
