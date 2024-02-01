import { useSelector } from "react-redux";

import {getFavoriteBooks} from "../../redux/books/books-selectors";

const MyFavoriteBooksPage = ()=> {
    const favoriteBooks = useSelector(getFavoriteBooks);

    const elements = favoriteBooks.map(({id, title, author}) => <li key={id}>Title: {title}. Author: {author}.</li>)
   
    return (
        <div>
            <h1>My favorite books page</h1>
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default MyFavoriteBooksPage;