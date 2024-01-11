import { Component } from "react";

import { getAllPosts } from "../../api/posts";

import styles from "./posts.module.css";

class Posts extends Component {
    state = {
        posts: [],
        loading: false,
        error: null,
    }

    async componentDidMount() {
        this.setState({
            loading: true,
        })
        
        try {
            const {data} = await getAllPosts();
            this.setState({
                posts: data?.length ? data : [],
            })
        }
        catch(error) {
            this.setState({
                error: error.message
            })
        }
        finally {
            this.setState({
                loading: false,
            })
        }

        // getAllPosts()
        //     .then(({ data }) => {
        //         this.setState({
        //             posts: data?.length ? data : [],
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({
        //             error: error.message,
        //         })
        //     })
        //     .finally(()=> {
        //         this.setState({
        //             loading: false,
        //         })
        //     })
    }

    render() {
        const { posts, loading, error } = this.state;
        const elements = posts.map(({ id, title, body }) => (<li key={id} className={styles.item}>
            <h3>{title}</h3>
            <p>{body}</p>
        </li>));

        return (
            <>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>...Loading</p>}
                {Boolean(elements.length) && (<ul className={styles.list}>
                    {elements}
                </ul>)}
            </>

        )
    }
}

export default Posts;