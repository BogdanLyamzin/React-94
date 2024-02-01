import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import {addBook, deleteBook} from "../../redux/books/books-slice";
import {setFilter} from "../../redux/filter/filter-slice";
import { getFilteredBooks } from "../../redux/books/books-selectors";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const books = useSelector(getFilteredBooks);

    const dispatch = useDispatch();

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

    const changeFitler = ({ target }) => dispatch(setFilter(target.value));

    return (
        <div className={styles.wrapper}>
            <MyBooksForm onSubmit={onAddBook} />
            <div className={styles.listWrapper}>
                <input name="filter" onChange={changeFitler} placeholder="Search" />
                <MyBookList items={books} deleteBook={onDeleteBook} />
            </div>
        </div>
    )
}

export default MyBooks;

