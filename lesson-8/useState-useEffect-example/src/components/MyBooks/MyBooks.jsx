import { Component, useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBookList from "./MyBookList/MyBookList";

import styles from "./my-books.module.css";

const MyBooks = () => {
    const [books, setBooks] = useState(()=> {
        const data = JSON.parse(localStorage.getItem("my-books"));
        return data || [];
    });

    const [filter, setFilter] = useState("");

    const firstRender = useRef(true);

    useEffect(()=> {
        if(!firstRender.current) {
            localStorage.setItem("my-books", JSON.stringify(books));
        }
    }, [books]);

    useEffect(()=> {
        firstRender.current = false;
    }, [])

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

    const addBook = (data) => {
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
    }

    const deleteBook = (id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id))
    }

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

/*
class MyBooks extends Component {
    state = {
        books: [],
        filter: ""
    }

    componentDidMount() {
        const books = JSON.parse(localStorage.getItem("my-books"));
        if (books?.length) {
            this.setState({
                books,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { books } = this.state;
        if (prevState.books.length !== books.length) {
            // console.log("update books")
            localStorage.setItem("my-books", JSON.stringify(this.state.books));
        }
    }

    isDublicate({ title, author }) {
        const { books } = this.state;
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        const dublicate = books.find(item => {
            const normalizedCurrentTitle = item.title.toLowerCase();
            const normalizedCurrentAuthor = item.author.toLowerCase();
            return (normalizedCurrentTitle === normalizedTitle && normalizedCurrentAuthor === normalizedAuthor);
        })

        return Boolean(dublicate);
    }

    addBook = (data) => {
        if (this.isDublicate(data)) {
            return alert(`Book with ${data.title} and ${data.author} already in list`);
        }

        this.setState(({ books }) => {
            const newBook = {
                id: nanoid(),
                ...data,
            }

            return {
                books: [...books, newBook]
            }
        })
    }

    deleteBook = (id) => {
        this.setState(({ books }) => {
            const newBooks = books.filter(item => item.id !== id);

            return {
                books: newBooks,
            }
        })
    }

    changeFitler = ({ target }) => {
        this.setState({
            filter: target.value
        })
    }

    getFilteredBooks() {
        const { filter, books } = this.state;
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

    render() {
        const { addBook, deleteBook, changeFitler } = this;
        const books = this.getFilteredBooks();

        return (
            <div className={styles.wrapper}>
                <MyBooksForm onSubmit={addBook} />
                <div className={styles.listWrapper}>
                    <input onChange={changeFitler} name="filter" placeholder="Search" />
                    <MyBookList items={books} deleteBook={deleteBook} />
                </div>
            </div>
        )
    }
}
*/
export default MyBooks;

