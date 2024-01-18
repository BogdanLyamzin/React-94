import { useState, useMemo, useCallback, memo } from "react";
import { nanoid } from "nanoid";

import styles from "./my-books-form.module.css";

const INITIAL_STATE = {
    title: "",
    author: "",
};

const MyBooksForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...INITIAL_STATE });

    const handleChange = useCallback(({ target }) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        onSubmit({ ...state });
        reset();
    };

    const reset = useCallback(() => {
        setState({ ...INITIAL_STATE });
    }, []);

    const bookTitleId = useMemo(() => nanoid(), []);
    const bookAuthorId = useMemo(() => nanoid(), []);

    const { title, author } = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor={bookTitleId}>Book title</label>
                <input value={title} required name="title" onChange={handleChange} id={bookTitleId} placeholder="Book title" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={bookAuthorId}>Book author</label>
                <input value={author} required name="author" onChange={handleChange} id={bookAuthorId} placeholder="Book author" />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default memo(MyBooksForm);