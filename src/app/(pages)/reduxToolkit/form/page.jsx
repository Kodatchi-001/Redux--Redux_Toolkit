'use client'

import ReduxToolkitFormComponents from "@/components/reduxToolkit/form";
import { store } from "@/reduxToolkit/store";
import { Provider } from "react-redux";

export default function ReduxToolkitForm() {
    return <>
        <Provider store={store}>
            <ReduxToolkitFormComponents />
        </Provider>
    </>
}