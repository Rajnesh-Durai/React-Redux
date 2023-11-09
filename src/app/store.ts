import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counter/counterSlice";
import personSlice from "../feature/person/personSlice";

export const store = configureStore({
    reducer: {
        counter:counterSlice,
        person:personSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
