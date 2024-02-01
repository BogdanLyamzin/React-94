import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./books/books-slice";
import filterReducer from "./filter/filter-slice";

const persistConfig = {
    key: "books",
    storage,
    whitelist: ["books"]
}

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;