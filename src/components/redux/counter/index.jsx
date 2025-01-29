import { useDispatch, useSelector } from "react-redux"

export default function ReduxCounterComponents() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return <>
        <h1>{count.count}</h1>
        <button onClick={() => dispatch({ type: 'Increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'Decrement' })}>-1</button>
    </>
}
