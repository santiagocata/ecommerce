import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => action.payload,
  }
);

export default userReducer;
