import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isVisible: false,
  },
  reducers: {
    showNavbar(state) {
      state.isVisible = true;
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;
