import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { windowScrollPositionActions } from '../store/window-scroll-position';

const useScrollYPosition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const setScrollPosition = () => {
      dispatch(windowScrollPositionActions.setYPosition(window.scrollY));
    };
    window.addEventListener('scroll', setScrollPosition);
    return () => {
      window.removeEventListener('scroll', setScrollPosition);
    };
  }, [dispatch]);
};

export default useScrollYPosition;
