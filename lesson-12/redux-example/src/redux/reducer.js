import { ADD_BOOK, DELETE_BOOK } from "./constants";

const initialState = {
    books: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_BOOK:
            const { books } = state;
            return {
                books: [...books, payload]
            };

        case DELETE_BOOK:
            const newBooks = state.books.filter(item => item.id !== payload);
            return {
                books: newBooks,
            }

        default:
            return state;
    }
}

export default reducer;