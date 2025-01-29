'use client'

import ReduxCounterComponents from "@/components/redux/counter";
import { store } from "@/redux/counter/store";
import { Provider } from "react-redux";

export default function ReduxCounter() {
    return <>
        <Provider store={store}>
            <ReduxCounterComponents />
        </Provider>
    </>
}