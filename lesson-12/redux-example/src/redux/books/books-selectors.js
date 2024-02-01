export const getAllBooks = store => store.books;

export const getFavoriteBooks = store => {
    return store.books.filter(({favorite}) => favorite);
}

export const getFilteredBooks = store => {
    const {books, filter} = store;
    if (!filter) {
        return books;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredBooks = books.filter(({ title, author }) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();

        return (normalizedAuthor.includes(normalizedFilter) || normalizedTitle.includes(normalizedFilter))
    });

    return filteredBooks;
}