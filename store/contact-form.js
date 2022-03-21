import { createSlice } from '@reduxjs/toolkit';

const contactFormSlice = createSlice({
  name: 'contact-form',
  initialState: {
    enteredName: '',
    enteredEmail: '',
    enteredMessage: '',
  },
  reducers: {
    setEnteredName(state, action) {
      state.enteredName = action.payload;
    },
    setEnteredEmail(state, action) {
      state.enteredEmail = action.payload;
    },
    setEnteredMessage(state, action) {
      state.enteredMessage = action.payload;
    },
  },
});

export const contactFormActions = contactFormSlice.actions;

export default contactFormSlice.reducer;
