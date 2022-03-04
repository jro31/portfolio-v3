import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './navbar';
import windowDimensionsReducer from './window-dimensions';
import windowScrollPositionReducer from './window-scroll-position';

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    windowDimensions: windowDimensionsReducer,
    windowScrollPosition: windowScrollPositionReducer,
  },
});

export default store;
