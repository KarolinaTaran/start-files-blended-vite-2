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
    removeTodo(state, { payload }) {
      const delteIndex = state.items.findIndex(item => item.id === payload);
      state.items.splice(delteIndex, 1);
    },
  },
});
export const selectTodos = state => state.items;
export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
