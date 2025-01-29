import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
    email: ''
}

export const FormReducer = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload
        },
        setLastName(state, action) {
            state.lastName = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        }
    }
})

export const { setFirstName, setLastName, setEmail } = FormReducer.actions;
export default FormReducer.reducer;