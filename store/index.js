import { configureStore } from '@reduxjs/toolkit';

import liveSection from './live-section';
import navbarReducer from './navbar';
import windowDimensionsReducer from './window-dimensions';
import windowScrollPositionReducer from './window-scroll-position';

const store = configureStore({
  reducer: {
    liveSection: liveSection,
    navbar: navbarReducer,
    windowDimensions: windowDimensionsReducer,
    windowScrollPosition: windowScrollPositionReducer,
  },
});

export default store;
