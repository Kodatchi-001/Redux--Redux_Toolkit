import { createStore } from "redux"

// Initial state of the form fields
const initialState = {
    firstName: '',
    lastName: '',
    email: ''
}

// Reducer function that updates the state based on dispatched actions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'First_Name':
            // Updates firstName with the new value from action.payload
            return { ...state, firstName: action.payload }
        case 'Last_Name':
            // Updates lastName with the new value from action.payload
            return { ...state, lastName: action.payload }
        case 'Email':
            // Updates email with the new value from action.payload
            return { ...state, email: action.payload }
        default:
            // Returns the current state if no action matches
            return state;
    }
}

// Creates a Redux store using the reducer function
export const store = createStore(reducer);
