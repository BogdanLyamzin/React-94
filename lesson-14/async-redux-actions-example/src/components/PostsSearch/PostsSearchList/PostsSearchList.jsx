import { Link, useLocation } from "react-router-dom";

import styles from "./posts-search-list.module.css";

const PostsSearchList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({ id, title }) => (<li key={id} className={styles.item}>
        <Link to={`/posts/${id}`} state={{from: location}}>{title}</Link>
    </li>));

    return (
        (<ol className={styles.list}>
            {elements}
        </ol>)
    )
}

export default PostsSearchList;