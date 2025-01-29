import { createStore } from "redux";

const iniatleState = {
    count: 0
}

const reducer = (state = iniatleState, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, count: state.count + 1 }
        case 'Decrement':
            return { ...state, count: (state.count > 0 ? state.count - 1 : 0) }
        default:
            return state;
    }
}

export const store = createStore(reducer);