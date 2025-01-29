import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const CounterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action) {
            state.count = action.payload
        }
    }
});

export const { setCounter } = CounterReducer.actions;
export default CounterReducer.reducer;