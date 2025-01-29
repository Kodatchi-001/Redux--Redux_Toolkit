'use client'

import ReduxFormComponents from "@/components/redux/form";
import { store } from "@/redux/form/store";
import { Provider } from "react-redux";

export default function ReduxForm() {
    return <>
        <Provider store={store}>
            <ReduxFormComponents />
        </Provider>
    </>
}