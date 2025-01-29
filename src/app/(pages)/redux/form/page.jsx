'use client'

import ReduxFormComponents from "@/components/redux/form";
import { store } from "@/redux/form/store";
import { Provider } from "react-redux";

export default function ReduxForm() {
    return <>
        {/* Configure store for form component */}
        <Provider store={store}>
            <ReduxFormComponents />
        </Provider>
    </>
}