import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCart = createAction("SET_CART");

const cartReducer = createReducer([],{
    [setCart]: (state,action) => action.payload
})


export default cartReducer;