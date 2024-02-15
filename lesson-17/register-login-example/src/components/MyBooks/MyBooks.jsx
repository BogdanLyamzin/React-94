import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import { fetchBooks, addBook, deleteBook } from "../../redux/books/books-operations";

import {setFilter} from "../../redux/filter/filter-slice";
import { selectBooks, selectFilteredBooks } from "../../redux/books/books-selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const {isLoading, error} = useSelector(selectBooks);
    const items = useSelector(selectFilteredBooks);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchBooks());
    }, []);

    const onAddBook = (data) => {
        dispatch(addBook(data));
    }

    const onDeleteBook = (id) => {
        dispatch(deleteBook(id));
    }

    const changeFitler = ({ target }) => dispatch(setFilter(target.value));

    return (
        <div className={styles.wrapper}>
            <MyBooksForm onSubmit={onAddBook} />
            <div className={styles.listWrapper}>
                <input name="filter" onChange={changeFitler} placeholder="Search" />
                {isLoading && <p>...Loading</p>}
                {error && <p>{error}</p>}
                {Boolean(items.length) && <MyBookList items={items} deleteBook={onDeleteBook} />}
            </div>
        </div>
    )
}

export default MyBooks;

