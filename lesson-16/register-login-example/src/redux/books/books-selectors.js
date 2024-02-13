import { createSelector } from "@reduxjs/toolkit";

export const selectAllBooks = store => store.books.items;

export const selectFavoriteBooks = createSelector(
    [selectAllBooks],
    books => books.filter(({ favorite }) => favorite)
)

// export const selectFavoriteBooks = store => {
//     return store.books.items.filter(({ favorite }) => favorite);
// }

export const selectBooks = state => state.books;

export const selectFilteredBooks = store => {
    const { books, filter } = store;
    const { items } = books;
    if (!filter) {
        return items;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredBooks = items.filter(({ title, author }) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
    });

    return filteredBooks
}