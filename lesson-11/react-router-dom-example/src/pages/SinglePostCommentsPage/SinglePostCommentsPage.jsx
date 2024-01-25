import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { getCommentsByPostId } from "../../api/posts";

const SinglePostCommentsPage = ()=> {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        const fetchComments = async()=> {
            try {
                setLoading(true);
                const {data} = await getCommentsByPostId(id);
                setComments(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    const elements = comments.map(({id, name, body}) => <li key={id}>
                                                            <h4>{name}</h4>
                                                            <p>{body}</p>
                                                        </li>)

    const isComments = Boolean(comments.length);

    return (
        <>
        {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {isComments && <ol>{elements}</ol>}
        </>
        
    )
}

export default SinglePostCommentsPage;