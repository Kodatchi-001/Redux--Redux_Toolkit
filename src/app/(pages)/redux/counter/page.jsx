'use client'

import ReduxCounterComponents from "@/components/redux/counter";
import { store } from "@/redux/counter/store";
import { Provider } from "react-redux";

export default function ReduxCounter() {
    return <>
        {/* Configure store for counter component */}
        <Provider store={store}>
            <ReduxCounterComponents />
        </Provider>
    </>
}