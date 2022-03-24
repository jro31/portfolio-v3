import { configureStore } from '@reduxjs/toolkit';

import contactFormReducer from './contact-form';
import elementIsInViewReducer from './element-is-in-view';
import navbarReducer from './navbar';
import windowDimensionsReducer from './window-dimensions';
import windowScrollPositionReducer from './window-scroll-position';

const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    elementIsInView: elementIsInViewReducer,
    navbar: navbarReducer,
    windowDimensions: windowDimensionsReducer,
    windowScrollPosition: windowScrollPositionReducer,
  },
});

export default store;
