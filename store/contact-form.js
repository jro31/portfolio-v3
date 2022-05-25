import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredFirstName: '',
  enteredLastName: '',
  enteredEmail: '',
  enteredPhone: '',
  enteredMessage: '',
};

const contactFormSlice = createSlice({
  name: 'contact-form',
  initialState,
  reducers: {
    setEnteredFirstName(state, action) {
      state.enteredFirstName = action.payload;
    },
    setEnteredLastName(state, action) {
      state.enteredLastName = action.payload;
    },
    setEnteredEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    setEnteredPhone(state, action) {
      state.enteredPhone = action.payload;
    },
    setEnteredMessage(state, action) {
      state.enteredMessage = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const contactFormActions = contactFormSlice.actions;

export default contactFormSlice.reducer;
