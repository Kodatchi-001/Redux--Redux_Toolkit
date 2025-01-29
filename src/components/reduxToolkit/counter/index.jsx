import { setCounter } from "@/reduxToolkit/counter";
import { useDispatch, useSelector } from "react-redux"

export default function ReduxToolkitCounterComponents() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return <>
        <h1>{counter.count}</h1>
        <button onClick={() => dispatch(setCounter(counter.count + 1))}>+1</button>
        <button onClick={() => dispatch(setCounter(counter.count > 0 ? counter.count - 1 : 0))}>-1</button>
    </>
}