import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useElementDistanceFromTopOfPage from './useElementDistanceFromTopOfPage';
import useElementHeight from './useElementHeight';
import { refElementNames } from '../pages';
import { elementIsInViewActions } from '../store/element-is-in-view';

const useElementIsInView = () => {
  const dispatch = useDispatch();
  const scrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const isInViewObject = useSelector(state => state.elementIsInView.isInView);
  const elementDistanceFromTopOfPage = useElementDistanceFromTopOfPage();
  const elementHeight = useElementHeight();

  let scrollYPositionRef = useRef(scrollYPosition);
  scrollYPositionRef.current = scrollYPosition;

  let isInViewObjectRef = useRef(isInViewObject);
  isInViewObjectRef.current = isInViewObject;

  const elementsAreInView = () => {
    console.log(isInViewObject);

    refElementNames.map(elementName => {
      if (isInViewObjectRef.current[elementName] === undefined)
        throw new Error(`Unrecognised element name '${elementName}' used in useElementIsInView`);

      const currentStatus = isInViewObjectRef.current[elementName];
      const elementTop = elementDistanceFromTopOfPage(elementName);
      const height = elementHeight(elementName);
      const elementBottom = elementTop + height;
      const bottomOfPage = scrollYPositionRef.current + window.innerHeight;

      if (elementName === 'home') {
        console.log('🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
        console.log(elementBottom);
        console.log(scrollYPositionRef.current);
        console.log(elementBottom > scrollYPositionRef.current);
        // console.log(elementTop);
        // console.log(bottomOfPage);
        // console.log(elementTop < bottomOfPage);
      }

      if (elementBottom > scrollYPositionRef.current && elementTop < bottomOfPage) {
        if (currentStatus === false)
          dispatch(elementIsInViewActions.setElementIsInView(elementName));
      } else if (currentStatus === true) {
        dispatch(elementIsInViewActions.setElementIsOutOfView(elementName));
      }
    });
  };

  const addEventListeners = () => {
    window.addEventListener('resize', elementsAreInView);
    window.addEventListener('scroll', elementsAreInView);
  };

  const removeEventListeners = () => {
    window.removeEventListener('resize', elementsAreInView);
    window.addEventListener('scroll', elementsAreInView);
  };

  useEffect(() => {
    elementsAreInView();
    addEventListeners();
    return () => removeEventListeners();
  }, []);
};

export default useElementIsInView;
