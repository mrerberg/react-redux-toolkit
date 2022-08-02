import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // Поле `reducers` позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;

      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом, он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        complete: false,
      };
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },
  },
});


export const { addTodo, toggleCompleteness } = todoSlice.actions;

export default todoSlice.reducer;
