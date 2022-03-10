import { createSlice } from '@reduxjs/toolkit';

const windowDimensionsSlice = createSlice({
  name: 'window-dimensions',
  initialState: {
    width: null,
    height: null,
  },
  reducers: {
    setWidth(state, action) {
      state.width = action.payload;
    },
    setHeight(state, action) {
      state.height = action.payload;
    },
  },
});

export const windowDimensionsActions = windowDimensionsSlice.actions;

export default windowDimensionsSlice.reducer;
