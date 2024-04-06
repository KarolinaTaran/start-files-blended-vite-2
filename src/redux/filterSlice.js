import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    text: '',
  },
  reducers: {
    setText(state, { payload }) {
      state.text = payload;
    },
  },
});
export const selectText = state => state.filter.text;
export const { setText } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
