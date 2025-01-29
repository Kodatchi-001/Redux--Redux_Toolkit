'use client'

import ReduxToolkitCounterComponents from "@/components/reduxToolkit/counter";
import { store } from "@/reduxToolkit/store";
import { Provider } from "react-redux";

export default function ReduxToolkitCounter() {
  return <>
    <Provider store={store}>
      <ReduxToolkitCounterComponents />
    </Provider>
  </>
}
