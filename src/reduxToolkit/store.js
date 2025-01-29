import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./form";
import CounterReducer  from "./counter";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        form: FormReducer
    }
})