import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { windowDimensionsActions } from '../store/window-dimensions';
import { navbarActions } from '../store/navbar';

const useWindowDimensions = () => {
  const dispatch = useDispatch();
  const mobileNavIsOpen = useSelector(state => state.navbar.mobileNavIsOpen);

  useEffect(() => {
    const setWindowDimensions = () => {
      dispatch(windowDimensionsActions.setWidth(window.innerWidth));
      dispatch(windowDimensionsActions.setHeight(window.innerHeight));
      if (window.innerWidth >= 1024 && mobileNavIsOpen) dispatch(navbarActions.closeMobileNav());
    };

    setWindowDimensions();
    window.addEventListener('resize', setWindowDimensions);
    return () => window.removeEventListener('resize', setWindowDimensions);
  }, [dispatch]);
};

export default useWindowDimensions;
