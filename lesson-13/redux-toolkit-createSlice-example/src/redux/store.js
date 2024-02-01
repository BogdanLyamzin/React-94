import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import rootReducer from "./rootReducer";

// import booksReducer from "./books/books-reducer";
// import filterReducer from "./filter/filter-reducer";

// const store = configureStore({
//     reducer: {
//         books: booksReducer,
//         filter: filterReducer,
//     }
// })

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
