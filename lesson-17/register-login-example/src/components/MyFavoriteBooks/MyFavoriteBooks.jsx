import { useSelector } from "react-redux";

import { selectFavoriteBooks } from "../../redux/books/books-selectors";

const MyFavoriteBooks = ()=> {
    const items = useSelector(selectFavoriteBooks);

    const elements = items.map(({id, title, author}) => <li key={id}>Title: {title}. Author: {author}.</li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default MyFavoriteBooks;