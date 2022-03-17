import { createAction, createReducer } from "@reduxjs/toolkit";

export const setReviews = createAction("SET_REVIEWS");

const reviewsReducer = createReducer([],{
    [setReviews]: (state,action) => action.payload
})


export default reviewsReducer;