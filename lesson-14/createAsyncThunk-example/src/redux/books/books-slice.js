import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const loadingReducer = (state) => {
    state.isLoading = true;
    state.error = null;
};

const errorReducer = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        fetBooksLoading: loadingReducer,
        fetchBooksSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items = payload;
        },
        fetchBooksError:errorReducer,
        addBookLoading: loadingReducer,
        addBookSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items.push(payload);
        },
        addBookError: errorReducer,
        deleteBookLoading: loadingReducer,
        deleteBookSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(({ id }) => id !== payload);
        },
        deleteBookError: errorReducer,
    }
});

export const { fetBooksLoading, fetchBooksSuccess, fetchBooksError, addBookLoading, addBookSuccess, addBookError, deleteBookLoading, deleteBookSuccess, deleteBookError} = booksSlice.actions;

export default booksSlice.reducer;