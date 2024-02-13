import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Button from "../Button/Button";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";

import { searchPosts } from "../../api/posts";

import styles from "./posts-search.module.css";

const PostsSearch = () => {
    // const [search, setSearch] = useState("");
    // const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search");
    const page = searchParams.get("page");

    useEffect(()=> {
        const fetchPosts = async ()=> {
            try {
                setLoading(true);
                const { data } = await searchPosts(search, page);
                setPosts(prevPosts => data?.length ? [...prevPosts, ...data] : prevPosts)
            }
            catch (error) {
               setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        
        if(search) {
            fetchPosts();
        }
    }, [search, page])

    const handleSearch = ({ search }) => {
        // setSearch(search);
        setSearchParams({search, page: 1});
        // setPage(1);
        setPosts([]);
        
    }

    const loadMore = () => setSearchParams({search, page: Number(page) + 1});

    const isPosts = Boolean(posts.length);

    return (
        <>
            <PostsSearchForm onSubmit={handleSearch} />
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {isPosts && <PostsSearchList items={posts} />}
            {isPosts && <div className={styles.loadMoreWrapper}>
                <Button onClick={loadMore} type="button">Load more</Button>
            </div>}
        </>
    )
}

export default PostsSearch;