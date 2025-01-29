import { useDispatch, useSelector } from "react-redux"

export default function ReduxCounterComponents() {
    // useSelector allows access to the global Redux state
    const count = useSelector((state) => state);

    // useDispatch allows dispatching actions to the Redux store
    const dispatch = useDispatch();

    return <>
        {/* Display the counter value from the Redux store */}
        <h1>{count.count}</h1>

        {/* Buttons to increment and decrement the counter */}
        <button onClick={() => dispatch({ type: 'Increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'Decrement' })}>-1</button>
    </>
}
