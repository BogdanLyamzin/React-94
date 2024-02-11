import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getPostById } from "../../api/posts";

import styles from "./single-post.module.css";

const SinglePost = () => {
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const location = useLocation();

    const from = location.state?.from || "/";

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const { data } = await getPostById(id);
                setPost(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, []);

    const goBack = () => navigate(from);

    return (
        <div>
            {loading && <p>...Loading</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={goBack} type="button">Go back</button>
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to="comments" state={{from}}>Comments</Link>
                    <Outlet />
                </>
            )}
        </div>
    )
}

export default SinglePost;