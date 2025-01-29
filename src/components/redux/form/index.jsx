import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function ReduxFormComponents() {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

    // Ensure you select the correct slice of the state
    const form = useSelector((state) => state);
    const dispatch = useDispatch();

    // Handle input field updates
    const handleValues = (e) => {
        const { name, value } = e.target
        setUser((prevState) => ({ ...prevState, [name]: value }));
    }

    // Dispatch user data to the Redux store
    const sendData = () => {
        dispatch({ type: 'First_Name', payload: user.firstName })
        dispatch({ type: 'Last_Name', payload: user.lastName })
        dispatch({ type: 'Email', payload: user.email });
    }

    // Form submission
    const createAccount = (e) => {
        e.preventDefault();
        sendData();
        console.log(form);
    }

    return <>
        <form onSubmit={createAccount}>
            <input type="text" name="firstName" value={user.firstName} onChange={handleValues} />
            <input type="text" name="lastName" value={user.lastName} onChange={handleValues} />
            <input type="text" name="email" value={user.email} onChange={handleValues} />
            <input type="submit" value="Create Account" />
            <ul>
                <li>{form?.firstName}</li>
                <li>{form?.lastName}</li>
                <li>{form?.email}</li>
            </ul>
        </form>
    </>
}