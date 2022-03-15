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
    elementsObj: initialElementsObj(),
  },
  reducers: {
    setElementIsInView(state, action) {
      verifyPayload(action.payload, current(state.elementsObj));
      state.elementsObj = { ...state.elementsObj, [action.payload]: true };
    },
    setElementIsOutOfView(state, action) {
      verifyPayload(action.payload, current(state.elementsObj));
      state.elementsObj = { ...state.elementsObj, [action.payload]: false };
    },
  },
});

export const elementIsInViewActions = elementIsInViewSlice.actions;

export default elementIsInViewSlice.reducer;
