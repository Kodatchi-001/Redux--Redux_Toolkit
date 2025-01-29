import { setEmail, setFirstName, setLastName } from "@/reduxToolkit/form";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function ReduxToolkitFormComponents() {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

    // Accessing the Redux store state for the form
    const form = useSelector((state) => state.form);
    // useDispatch hook to send actions to the Redux store
    const dispatch = useDispatch();

    // Function to handle input changes and update local state
    const handleValues = (e) => {
        const { name, value } = e.target
        setUser((prevState) => ({ ...prevState, [name]: value }));
    }

    // Function to dispatch form data to Redux store
    const sendData = () => {
        dispatch(setFirstName(user.firstName)); // Dispatch first name to Redux store
        dispatch(setLastName(user.lastName)); // Dispatch last name to Redux store
        dispatch(setEmail(user.email)); // Dispatch email to Redux store
    }

    // Function triggered when the form is submitted
    const createAccount = (e) => {
        e.preventDefault(); // Prevent page reload
        sendData(); // Send data to Redux store
    }

    return <>
        <form onSubmit={createAccount}>
            <input type="text" name="firstName" value={user.firstName} onChange={handleValues} />
            <input type="text" name="lastName" value={user.lastName} onChange={handleValues} />
            <input type="text" name="email" value={user.email} onChange={handleValues} />
            <input type="submit" value="Create Account" />
            <ul>
                <li>{form.firstName}</li>
                <li>{form.lastName}</li>
                <li>{form.email}</li>
            </ul>
        </form>
    </>
}