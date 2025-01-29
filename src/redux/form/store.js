import { createStore } from "redux"

const initialState = {
    firstName: '',
    lastName: '',
    email: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'First_Name':
            return { ...state, firstName: action.payload }
        case 'Last_Name':
            return { ...state, lastName: action.payload }
        case 'Email':
            return { ...state, email: action.payload }
        default:
            return state;
    }
}

export const store = createStore(reducer);
