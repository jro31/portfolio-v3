import { useSelector } from 'react-redux';

import { sectionOrder } from '../pages';

const useLiveSection = () => {
  // FIXME - This doesn't work on mobile (see https://stackoverflow.com/a/50310297/2475306 perhaps)
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const windowScrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);

  const liveSection = () => sectionOrder[Math.floor(windowScrollYPosition / windowHeight)];

  return liveSection;
};

export default useLiveSection;
