import { createSlice, current } from '@reduxjs/toolkit';

import { refElementNames } from '../pages';

const initialElementsObj = () => {
  let returnObj = {};

  refElementNames.map(elementName => (returnObj[elementName] = false));

  return returnObj;
};

const verifyPayload = (payload, elementsObject) => {
  if (elementsObject[payload] === undefined)
    throw new Error(`Unrecognised payload '${payload}' passed to elementIsInView reducer`);
};

const elementIsInViewSlice = createSlice({
  name: 'element-is-in-view',
  initialState: {
    isInView: initialElementsObj(),
    hasBeenInView: initialElementsObj(),
  },
  reducers: {
    setElementIsInView(state, action) {
      verifyPayload(action.payload, current(state.isInView));
      state.isInView = { ...state.isInView, [action.payload]: true };
      if (state.hasBeenInView[action.payload] === false)
        state.hasBeenInView = { ...state.hasBeenInView, [action.payload]: true };
    },
    setElementIsOutOfView(state, action) {
      verifyPayload(action.payload, current(state.isInView));
      state.isInView = { ...state.isInView, [action.payload]: false };
    },
  },
});

export const elementIsInViewActions = elementIsInViewSlice.actions;

export default elementIsInViewSlice.reducer;
