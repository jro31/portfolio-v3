import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useElementDistanceFromTopOfPage from './useElementDistanceFromTopOfPage';
import useElementHeight from './useElementHeight';
import { refElementNames } from '../pages';
import { elementIsInViewActions } from '../store/element-is-in-view';

const useElementIsInView = () => {
  const dispatch = useDispatch();
  const windowHeight = useSelector(state => state.windowDimensions.height);
  const scrollYPosition = useSelector(state => state.windowScrollPosition.yPosition);
  const elementsObject = useSelector(state => state.elementIsInView.elementsObj);
  const elementDistanceFromTopOfPage = useElementDistanceFromTopOfPage();
  const elementHeight = useElementHeight();

  let windowHeightRef = useRef(windowHeight);
  windowHeightRef.current = windowHeight;

  let scrollYPositionRef = useRef(scrollYPosition);
  scrollYPositionRef.current = scrollYPosition;

  let elementsObjectRef = useRef(elementsObject);
  elementsObjectRef.current = elementsObject;

  const elementsAreInView = () => {
    refElementNames.map(elementName => {
      if (elementsObjectRef.current[elementName] === undefined)
        throw new Error(`Unrecognised element name '${elementName}' used in useElementIsInView`);

      const currentStatus = elementsObjectRef.current[elementName];
      const elementTop = elementDistanceFromTopOfPage(elementName);
      const height = elementHeight(elementName);
      const elementBottom = elementTop + height;
      const bottomOfPage = scrollYPositionRef.current + windowHeightRef.current;

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
