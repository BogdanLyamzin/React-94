import { useEffect, useRef, useMemo } from "react";
import { nanoid } from "nanoid";

import useForm from "../../../hooks/useForm";

import styles from "./posts-search-form.module.css";

const INITIAL_STATE = {
    search: ""
}

const PostsSearchForm = ({ onSubmit }) => {
    const {state, handleChange, handleSubmit} = useForm(INITIAL_STATE, onSubmit);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const searchId = useMemo(() => nanoid(), []);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
                <label htmlFor={searchId}>Enter search phrase</label>
                <input id={searchId} ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" placeholder="Enter search phrase" />
            </div>
            <button type="submit">Search</button>
        </form>
    )
}

export default PostsSearchForm;