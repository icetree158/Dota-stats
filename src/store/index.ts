import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./heroSlice";
import  userReducer from "./userSlice";



export  const store = configureStore({
    reducer: {
        user: userReducer,
        hero:heroReducer,
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


