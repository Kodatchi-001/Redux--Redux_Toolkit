import { createSlice } from "@reduxjs/toolkit";

// Initial state of the counter
const initialState = {
    count: 0
};

// Creating a Redux slice for the counter
export const CounterReducer = createSlice({
    name: 'counter', // Slice name
    initialState,    // Initial state
    reducers: {
        // Action to update the counter value
        setCounter(state, action) {
            state.count = action.payload; // Directly modifies state (immer handles immutability)
        }
    }
});

// Exporting the action creator
export const { setCounter } = CounterReducer.actions;

// Exporting the reducer to be used in the store
export default CounterReducer.reducer;
