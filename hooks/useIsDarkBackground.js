import useLiveSection from './useLiveSection';
import { introductionSection } from '../pages';

const useIsDarkBackground = () => {
  const liveSection = useLiveSection();
  const darkSections = [introductionSection];

  const isDarkBackground = () => darkSections.includes(liveSection());

  return isDarkBackground;
};

export default useIsDarkBackground;
