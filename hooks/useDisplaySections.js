// TODO - Should this be updated/removed?

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sectionsActions } from '../store/sections';

const useDisplaySections = () => {
  const dispatch = useDispatch();
  const liveSection = useSelector(state => state.liveSection.liveSection);
  const displayedSections = useSelector(state => state.sections.sectionHasBeenDisplayed);

  useEffect(() => {
    if (!displayedSections[liveSection]) {
      dispatch(sectionsActions.setSectionHasBeenDisplayed(liveSection));
    }
  }, [liveSection, dispatch]);
};

export default useDisplaySections;
