import { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./my-books-form.module.css";

const INITIAL_STATE = {
    title: "",
    author: "",
};

class MyBooksForm extends Component {
    bookTitleId = nanoid();
    bookAuthorId = nanoid();

    state = {...INITIAL_STATE}

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({...INITIAL_STATE});
    }

    render() {
        const {bookTitleId, bookAuthorId, handleSubmit, handleChange} = this;
        const {title, author} = this.state;
        
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
}

export default MyBooksForm;