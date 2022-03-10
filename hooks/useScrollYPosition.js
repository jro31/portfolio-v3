import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { windowScrollPositionActions } from '../store/window-scroll-position';
import { liveSectionActions } from '../store/live-section';

import useLiveSection from './useLiveSection';

const useScrollYPosition = () => {
  const dispatch = useDispatch();
  const liveSection = useLiveSection();

  useEffect(() => {
    const setScrollPosition = () => {
      dispatch(windowScrollPositionActions.setYPosition(window.scrollY));
      dispatch(liveSectionActions.setLiveSection(liveSection()));
    };

    window.addEventListener('scroll', setScrollPosition);
    return () => {
      window.removeEventListener('scroll', setScrollPosition);
    };
  }, [dispatch]);
};

export default useScrollYPosition;
