import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import { fetchBooks, addBook, deleteBook } from "../../redux/books/books-operations";

import {setFilter} from "../../redux/filter/filter-slice";
import { selectAllBooks } from "../../redux/books/books-selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const {items, isLoading, error} = useSelector(selectAllBooks);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchBooks());
    }, []);

    const isDublicate = ({ title, author }) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        const dublicate = items.find(item => {
            const normalizedCurrentTitle = item.title.toLowerCase();
            const normalizedCurrentAuthor = item.author.toLowerCase();
            return (normalizedCurrentTitle === normalizedTitle && normalizedCurrentAuthor === normalizedAuthor);
        })

        return Boolean(dublicate);
    }

    const onAddBook = (data) => {
        if (isDublicate(data)) {
            return alert(`Book with ${data.title} and ${data.author} already in list`);
        }
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

