import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./form";  // Importing form slice reducer
import CounterReducer from "./counter"; // Importing counter slice reducer

// Creating the Redux store
export const store = configureStore({
    reducer: {
        counter: CounterReducer,  // Assigning the counter reducer to 'counter' state
        form: FormReducer  // Assigning the form reducer to 'form' state
    }
});

