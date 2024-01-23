import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllPosts } from "../../api/posts";

import styles from "./posts.module.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const { data } = await getAllPosts();
                setPosts(data?.length ? data : []);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    const elements = posts.map(({ id, title }) => (<li key={id} className={styles.item}>
                                                        <Link to={`/posts/${id}`}>{title}</Link>
                                                    </li>));

    return (
        <>
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {Boolean(elements.length) && (<ol className={styles.list}>
                {elements}
            </ol>)}
        </>
    )
}

export default Posts;