import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const [books, setBooks] = useLocalStorage("my-books", []);

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
    };

    const addBook = useCallback((data) => {
        if (isDublicate(data)) {
            return alert(`Book with ${data.title} and ${data.author} already in list`);
        }

        setBooks(prevBooks => {
            const newBook = {
                id: nanoid(),
                ...data,
            };

            return [...prevBooks, newBook];
        })
    }, []);

    const deleteBook = useCallback((id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id))
    }, [setBooks]);

    const changeFitler = useCallback(({ target }) => setFilter(target.value), [setFilter]);

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

    return (
        <div className={styles.wrapper}>
            <MyBooksForm onSubmit={addBook} />
            <div className={styles.listWrapper}>
                <input onChange={changeFitler} name="filter" placeholder="Search" />
                <MyBookList items={items} deleteBook={deleteBook} />
            </div>
        </div>
    )
}

export default MyBooks;

