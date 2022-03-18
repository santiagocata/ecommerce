import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"

import userReducer from "./user";
import cartReducer from "./cart";
import reviewsReducer from "./reviews";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        user: userReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
    }
})

export default store