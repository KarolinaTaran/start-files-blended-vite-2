import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
  },
});
export const selectTodos = state => state.items;
export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
