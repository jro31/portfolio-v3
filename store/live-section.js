import { createSlice } from '@reduxjs/toolkit';

import { sectionOrder } from '../pages';

const liveSectionSlice = createSlice({
  name: 'live-section',
  initialState: {
    liveSection: sectionOrder[0],
  },
  reducers: {
    setLiveSection(state, action) {
      state.liveSection = action.payload;
    },
  },
});

export const liveSectionActions = liveSectionSlice.actions;

export default liveSectionSlice.reducer;
