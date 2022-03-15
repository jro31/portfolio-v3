import { configureStore } from '@reduxjs/toolkit';

import elementIsInViewReducer from './element-is-in-view';
import liveSectionReducer from './live-section';
import navbarReducer from './navbar';
import sectionsReducer from './sections';
import windowDimensionsReducer from './window-dimensions';
import windowScrollPositionReducer from './window-scroll-position';

const store = configureStore({
  reducer: {
    elementIsInView: elementIsInViewReducer,
    liveSection: liveSectionReducer,
    navbar: navbarReducer,
    sections: sectionsReducer,
    windowDimensions: windowDimensionsReducer,
    windowScrollPosition: windowScrollPositionReducer,
  },
});

export default store;
