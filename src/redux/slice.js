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
      const deleteIndex = state.items.findIndex(item => item.id === payload);
      if (deleteIndex === -1) {
        return;
      }
      state.items.splice(deleteIndex, 1);
    },
    editTodo(state, { payload }) {
      const editedIndex = state.items.findIndex(item => item.id === payload.id);
      if (editedIndex === -1) {
        return;
      }
      state.items[editedIndex].text = payload.text;
    },
  },
});
export const selectTodos = state => state.items;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
