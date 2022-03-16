import { configureStore } from '@reduxjs/toolkit';

import elementIsInViewReducer from './element-is-in-view';
import liveSectionReducer from './live-section';
import navbarReducer from './navbar';
import windowDimensionsReducer from './window-dimensions';
import windowScrollPositionReducer from './window-scroll-position';

const store = configureStore({
  reducer: {
    elementIsInView: elementIsInViewReducer,
    liveSection: liveSectionReducer,
    navbar: navbarReducer,
    windowDimensions: windowDimensionsReducer,
    windowScrollPosition: windowScrollPositionReducer,
  },
});

export default store;
