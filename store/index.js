import { configureStore } from '@reduxjs/toolkit';

import windowDimensionsReducer from './window-dimensions';

const store = configureStore({
  reducer: {
    windowDimensions: windowDimensionsReducer,
  },
});

export default store;
