import { useState, useMemo, useId } from "react";
import { nanoid } from "nanoid";

import styles from "./register-form.module.css";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
};

const RegisterForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...INITIAL_STATE });

    const handleChange = ({ target }) => {
        const { name, value, type, checked } = target;
        const newValue = type === "checkbox" ? checked : value;

        setState({
            ...state,
            [name]: newValue,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    };

    const reset = () => {
        setState({ ...INITIAL_STATE });
    }

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.block}>
                <label htmlFor={nameId}>Name:</label>
                <input value={name} onChange={handleChange} name="name" id={nameId} required />
            </div>
            <div className={styles.block}>
                <label htmlFor={emailId}>Email:</label>
                <input value={email} onChange={handleChange} type="email" name="email" id={emailId} required />
            </div>
            <div className={styles.block}>
                <label htmlFor={passwordId}>Password:</label>
                <input value={password} onChange={handleChange} type="password" name="password" id={passwordId} required />
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;