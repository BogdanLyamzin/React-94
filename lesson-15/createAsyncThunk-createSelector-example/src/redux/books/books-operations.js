import { createAsyncThunk } from "@reduxjs/toolkit";

import * as booksApi from "../../api/books-api";

export const fetchBooks = createAsyncThunk(
    "books/fetchAll",
    async(_, thunkAPI) => {
        try {
            const data = await booksApi.requestFetchBooks();
            return data;
        }
        catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

// export const fetchBooks = () => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(fetBooksLoading());
//             const data = await booksApi.requestFetchBooks();
//             dispatch(fetchBooksSuccess(data));
//         }
//         catch (error) {
//             dispatch(fetchBooksError(error.message));
//         }
//     }

//     return func;
// }

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

// export const addBook = (body)=> {
//     const func = async (dispatch)=> {
//         try {
//             dispatch(addBookLoading());
//             const data = await booksApi.requestAddBooks(body);
//             dispatch(addBookSuccess(data));
//         }
//         catch(error) {
//             dispatch(addBookError(error.message));
//         }
//     }

//     return func;
// }

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

// export const deleteBook = id => {
//     const func = async (dispatch) => {
//         try {
//             dispatch(deleteBookLoading());
//             await booksApi.requestDeleteBook(id);
//             dispatch(deleteBookSuccess(id))
//         }
//         catch(error){
//             dispatch(deleteBookError(error.message));
//         }
//     }

//     return func;
// }

/*
const createAsyncThunk = (operationName, operationFunction => {
    const operations = value => {
        const func = async(dispatch)=> {
            try {
                dispatch(operations.pending());
                const data = await operationFunction(value);
                dispatch(operations.fulfilled(data))
            }
            catch(error){

            }
        }

        operations.pending = `${operationName}/pending`;
        operations.fulfilled = `${operationName}/fulfilled`;
        operations.reject = `${operationName}/reject`;
    }
})
*/