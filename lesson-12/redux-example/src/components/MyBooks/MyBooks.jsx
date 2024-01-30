import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import {addBook, deleteBook} from "../../redux/actions";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const books = useSelector(store => store.books);
    const dispatch = useDispatch();

    const [filter, setFilter] = useState("");

    const isDublicate = ({ title, author }) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        const dublicate = books.find(item => {
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

        const action = addBook(data);
        dispatch(action);
    }

    const onDeleteBook = (id) => {
        dispatch(deleteBook(id));
    }
/*
    const changeFitler = ({ target }) => setFilter(target.value);

    const getFilteredBooks = () => {
        if (!filter) {
            return books;
        }

        const normalizedFilter = filter.toLowerCase();

        const filteredBooks = books.filter(({ title, author }) => {
            const normalizedTitle = title.toLowerCase();
            const normalizedAuthor = author.toLowerCase();

            return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
        });

        return filteredBooks;
    }

    const items = getFilteredBooks();
*/
    return (
        <div className={styles.wrapper}>
            <MyBooksForm onSubmit={onAddBook} />
            <div className={styles.listWrapper}>
                <input  name="filter" placeholder="Search" />
                <MyBookList items={books} deleteBook={onDeleteBook} />
            </div>
        </div>
    )
}

export default MyBooks;

