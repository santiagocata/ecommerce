import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"

import userReducer from "./user";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        user: userReducer
    }
})

export default store