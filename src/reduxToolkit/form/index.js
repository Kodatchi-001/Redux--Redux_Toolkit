import { createSlice } from "@reduxjs/toolkit";

// Initial state for the form
const initialState = {
    firstName: '',
    lastName: '',
    email: ''
};

// Creating a Redux slice for the form
export const FormReducer = createSlice({
    name: 'form',  // Slice name
    initialState,  // Initial state
    reducers: {
        // Action to update first name
        setFirstName(state, action) {
            state.firstName = action.payload; // Directly modifies state (handled by immer)
        },
        // Action to update last name
        setLastName(state, action) {
            state.lastName = action.payload;
        },
        // Action to update email
        setEmail(state, action) {
            state.email = action.payload;
        }
    }
});

// Exporting action creators
export const { setFirstName, setLastName, setEmail } = FormReducer.actions;

// Exporting the reducer to be used in the store
export default FormReducer.reducer;
