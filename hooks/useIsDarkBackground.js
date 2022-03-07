import useLiveSection from './useLiveSection';
import { introductionSecion } from '../pages';

const useIsDarkBackground = () => {
  const liveSection = useLiveSection();
  const darkSections = [introductionSecion];

  const isDarkBackground = () => darkSections.includes(liveSection());

  return isDarkBackground;
};

export default useIsDarkBackground;
