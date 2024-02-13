import { useState } from "react";
import { nanoid } from "nanoid";

import styles from "./my-books-form.module.css";

const INITIAL_STATE = {
    title: "",
    author: "",
    favorite: false,
};

const MyBooksForm = ({onSubmit}) => {
    const [state, setState] = useState({...INITIAL_STATE});

    const handleChange = ({target}) => {
        const {name, value, type, checked} = target;
        const newValue = type === "checkbox" ? checked : value;

        setState({
            ...state,
            [name]: newValue,
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state});
        reset();
    }

    const reset = () => {
        setState({...INITIAL_STATE});
    }

    const bookTitleId = nanoid();
    const bookAuthorId = nanoid();
    const bookFavoriteId = nanoid();

    const {title, author, favorite} = state;
        
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
            <div className={styles.formGroup}>
                <label htmlFor={bookFavoriteId}>Favorite</label>
                <input type="checkbox" checked={favorite} name="favorite" onChange={handleChange} id={bookFavoriteId} />
            </div>
            <button type="submit">Add book</button>
        </form>
    )
}

export default MyBooksForm;