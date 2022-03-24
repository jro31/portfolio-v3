import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enteredName: '',
  enteredEmail: '',
  enteredMessage: '',
};

const contactFormSlice = createSlice({
  name: 'contact-form',
  initialState,
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
    resetForm: () => initialState,
  },
});

export const contactFormActions = contactFormSlice.actions;

export default contactFormSlice.reducer;
