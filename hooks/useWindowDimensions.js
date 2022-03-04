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
    window.addEventListener('resize', setWindowDimensions);
    return () => window.removeEventListener('resize', setWindowDimensions);
  }, [dispatch]);
};

export default useWindowDimensions;
