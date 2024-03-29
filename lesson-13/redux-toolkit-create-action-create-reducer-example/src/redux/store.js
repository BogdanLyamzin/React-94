import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

// import booksReducer from "./books/books-reducer";
// import filterReducer from "./filter/filter-reducer";

// const store = configureStore({
//     reducer: {
//         books: booksReducer,
//         filter: filterReducer,
//     }
// })

const store = configureStore({
    reducer: rootReducer,
})


export default store;