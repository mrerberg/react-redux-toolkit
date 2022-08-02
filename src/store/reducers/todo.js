import { createReducer } from "@reduxjs/toolkit";

import { addTodo, toggleCompleteness } from "../actions/todo";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    const id = ++nextTodoId;

    state.allIds.push(id);

    state.byIds[id] = {
      content: action.payload,
      complete: false,
    };
  });

  builder.addCase(
    toggleCompleteness,
    (state, action) => {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    }
  );
});
