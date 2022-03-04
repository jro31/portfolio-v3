import { createSlice } from '@reduxjs/toolkit';

const windowScrollPositionSlice = createSlice({
  name: 'window-scroll-position',
  initialState: {
    yPosition: 0,
  },
  reducers: {
    setYPosition(state, action) {
      state.yPosition = action.payload;
    },
  },
});

export const windowScrollPositionActions = windowScrollPositionSlice.actions;

export default windowScrollPositionSlice.reducer;
