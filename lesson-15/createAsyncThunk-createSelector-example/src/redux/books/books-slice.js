import { createSlice } from "@reduxjs/toolkit";

import { fetchBooks, addBook, deleteBook } from "./books-operations";

const pending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const rejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchBooks.pending, pending)
            .addCase(fetchBooks.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = payload;
            })
            .addCase(fetchBooks.rejected, rejected)
            .addCase(addBook.pending, pending)
            .addCase(addBook.fulfilled, (state, {payload})=> {
                state.isLoading = false;
                state.items.push(payload);
            })
            .addCase(deleteBook.pending, pending)
            .addCase(deleteBook.fulfilled, (state, {payload})=> {
                state.isLoading = false;
                state.items = state.items.filter(({ id }) => id !== payload);
            })
            .addCase(deleteBook.rejected, rejected)
    }
});

export default booksSlice.reducer;