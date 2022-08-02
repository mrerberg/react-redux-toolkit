
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("todo/addTodo");

export const toggleCompleteness = createAction("todo/toggleCompleteness");