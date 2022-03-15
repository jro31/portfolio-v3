// TODO - Need this anymore?

import { createSlice } from '@reduxjs/toolkit';

import { sectionOrder } from '../pages';

const sectionHasBeenDisplayedInitialObject = () => {
  let returnObj = {};

  sectionOrder.map(section => (returnObj[section] = false));

  return returnObj;
};

const sectionSlice = createSlice({
  name: 'sections',
  initialState: {
    sectionHasBeenDisplayed: sectionHasBeenDisplayedInitialObject(),
  },
  reducers: {
    setSectionHasBeenDisplayed(state, action) {
      state.sectionHasBeenDisplayed = { ...state.sectionHasBeenDisplayed, [action.payload]: true };
    },
  },
});

export const sectionsActions = sectionSlice.actions;

export default sectionSlice.reducer;
