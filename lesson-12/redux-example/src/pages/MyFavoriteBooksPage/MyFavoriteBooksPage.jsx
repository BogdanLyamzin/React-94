import { useSelector } from "react-redux";

const MyFavoriteBooksPage = ()=> {
    const favoriteBooks = useSelector(store => {
        return store.books.filter(({favorite}) => favorite);
    });

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