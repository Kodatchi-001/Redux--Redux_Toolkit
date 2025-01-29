import { setCounter } from "@/reduxToolkit/counter";
import { useDispatch, useSelector } from "react-redux"

export default function ReduxToolkitCounterComponents() {
    // useSelector allows us to access the counter state from the Redux Toolkit store
    const counter = useSelector((state) => state.counter);

    // useDispatch provides a function to dispatch actions to the Redux Toolkit store
    const dispatch = useDispatch();

    return <>
        {/* Display the current counter value from Redux state */}
        <h1>{counter.count}</h1>
        {/* Button to increment and decrement the counter */}
        <button onClick={() => dispatch(setCounter(counter.count + 1))}>+1</button>
        <button onClick={() => dispatch(setCounter(counter.count > 0 ? counter.count - 1 : 0))}>-1</button>
    </>
}