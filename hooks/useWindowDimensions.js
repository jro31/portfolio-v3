import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { windowDimensionsActions } from '../store/window-dimensions';

const useWindowDimensions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const setWindowDimensions = () => {
      dispatch(windowDimensionsActions.setWidth(window.innerWidth));
      dispatch(windowDimensionsActions.setHeight(window.innerHeight));
    };

    setWindowDimensions();
    // TODO - Close the mobile nav if it is open and resized from mobile to desktop
    window.addEventListener('resize', setWindowDimensions);
    return () => window.removeEventListener('resize', setWindowDimensions);
  }, [dispatch]);
};

export default useWindowDimensions;
