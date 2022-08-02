import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../store/reducers/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
