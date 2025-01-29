import { setEmail, setFirstName, setLastName } from "@/reduxToolkit/form";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export default function ReduxToolkitFormComponents() {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();

    const handelValues = (e) => {
        const { name, value } = e.target
        setUser((prevState) => ({ ...prevState, [name]: value }));
    }

    const sendData = () => {
        dispatch(setFirstName(user.firstName));
        dispatch(setLastName(user.lastName));
        dispatch(setEmail(user.email));
    }

    const createAccount = (e) => {
        e.preventDefault();
        sendData();
    }

    return <>
        <form onSubmit={createAccount}>
            <input type="text" name="firstName" value={user.firstName} onChange={handelValues} />
            <input type="text" name="lastName" value={user.lastName} onChange={handelValues} />
            <input type="text" name="email" value={user.email} onChange={handelValues} />
            <input type="submit" value="Create Account" />
            <ul>
                <li>{form.firstName}</li>
                <li>{form.lastName}</li>
                <li>{form.email}</li>
            </ul>
        </form>
    </>
}