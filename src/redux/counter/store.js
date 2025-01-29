import { createStore } from "redux";

// Initial state of the store
const iniatleState = {
    count: 0
}
// Reducer function that updates the state based on dispatched actions
const reducer = (state = iniatleState, action) => {
    switch (action.type) {
        case 'Increment':
            // Increments the count by 1
            return { ...state, count: state.count + 1 }
        case 'Decrement':
            // Decrements the count by 1 but prevents it from going below 0
            return { ...state, count: (state.count > 0 ? state.count - 1 : 0) }
        default:
            // Returns the current state if no action matches
            return state;
    }
}
// Creates a Redux store using the reducer function
export const store = createStore(reducer);