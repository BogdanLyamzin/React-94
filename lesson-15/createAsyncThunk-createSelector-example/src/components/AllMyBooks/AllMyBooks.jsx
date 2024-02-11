import { useSelector } from "react-redux";

import { selectAllBooks } from "../../redux/books/books-selectors";

const AllMyBooks = ()=> {
    const items = useSelector(selectAllBooks);
    console.log("render all books");
    const elements = items.map(({id, title, author}) => <li key={id}>Title: {title}. Author: {author}.</li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default AllMyBooks;