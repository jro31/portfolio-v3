import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isVisible: false,
    mobileNavIsOpen: false,
  },
  reducers: {
    showNavbar(state) {
      state.isVisible = true;
    },
    // showMobileNav(state) {
    //   state.mobileNavIsOpen = true;
    // },
    // hideMobileNav(state) {
    //   state.mobileNavIsOpen = false;
    // },
    toggleMobileNav(state) {
      state.mobileNavIsOpen = !state.mobileNavIsOpen;
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;
