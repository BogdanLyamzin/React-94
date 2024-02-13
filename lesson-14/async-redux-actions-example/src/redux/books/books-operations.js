import * as booksApi from "../../api/books-api";

import { fetBooksLoading, fetchBooksSuccess, fetchBooksError, addBookLoading, addBookSuccess, addBookError, deleteBookLoading, deleteBookSuccess, deleteBookError} from "./books-slice";

export const fetchBooks = () => {
    const func = async (dispatch) => {
        try {
            dispatch(fetBooksLoading());
            const data = await booksApi.requestFetchBooks();
            dispatch(fetchBooksSuccess(data));
        }
        catch (error) {
            dispatch(fetchBooksError(error.message));
        }
    }

    return func;
}

export const addBook = (body)=> {
    const func = async (dispatch)=> {
        try {
            dispatch(addBookLoading());
            const data = await booksApi.requestAddBooks(body);
            dispatch(addBookSuccess(data));
        }
        catch(error) {
            dispatch(addBookError(error.message));
        }
    }

    return func;
}

export const deleteBook = id => {
    const func = async (dispatch) => {
        try {
            dispatch(deleteBookLoading());
            await booksApi.requestDeleteBook(id);
            dispatch(deleteBookSuccess(id))
        }
        catch(error){
            dispatch(deleteBookError(error.message));
        }
    }

    return func;
}