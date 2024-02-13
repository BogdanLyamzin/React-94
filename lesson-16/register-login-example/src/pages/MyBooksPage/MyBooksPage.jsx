import MyBooks from "../../components/MyBooks/MyBooks";
import AllMyBooks from "../../components/AllMyBooks/AllMyBooks";
import MyFavoriteBooks from "../../components/MyFavoriteBooks/MyFavoriteBooks";

const MyBooksPage = ()=> {
    return (
        <div>
            <h1>My books page</h1>
            <MyBooks />
            <AllMyBooks />
            <h2>My Favorite books</h2>
            <MyFavoriteBooks />
        </div>
    )
}

export default MyBooksPage;