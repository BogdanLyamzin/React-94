import { createAsyncThunk } from "@reduxjs/toolkit";

import * as booksApi from "../../api/books-api";

export const fetchBooks = createAsyncThunk(
    "books/fetchAll",
    async(_, {rejectWithValue}) => {
        try {
            const data = await booksApi.requestFetchBooks();
            return data;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addBook = createAsyncThunk(
    "books/add",
    async(body, {rejectWithValue})=> {
        try {
            const data = await booksApi.requestAddBooks(body);
            return data;
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    },
    {
        condition: ({title, author}, {getState})=> {
            const {books} = getState();
            const normalizedTitle = title.toLowerCase();
            const normalizedAuthor = author.toLowerCase();
    
            const dublicate = books.items.find(item => {
                const normalizedCurrentTitle = item.title.toLowerCase();
                const normalizedCurrentAuthor = item.author.toLowerCase();
                return (normalizedCurrentTitle === normalizedTitle && normalizedCurrentAuthor === normalizedAuthor);
            })

            if(dublicate) {
                alert(`Book with ${title} and ${author} already in list`);
                return false;
            }
        }
    }
)

export const deleteBook = createAsyncThunk(
    "books/delete",
    async(id, {rejectWithValue}) => {
        try {
            await booksApi.requestDeleteBook(id);
            return id;
        }
        catch(error) {
            return rejectWithValue(error.message);
        }
    }
)
