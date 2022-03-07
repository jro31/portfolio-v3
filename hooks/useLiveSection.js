import { useSelector } from 'react-redux';

import { sectionOrder } from '../pages';

const useLiveSection = () => {
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);

  const liveSection = () => sectionOrder[Math.floor(windowScrollYPosition / windowHeight)];

  return liveSection;
};

export default useLiveSection;
