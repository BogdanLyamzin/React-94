import { Component, useEffect, useState } from "react";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";

import { searchPosts } from "../../api/posts";

import styles from "./posts-search.module.css";

const PostsSearch = () => {
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [postDetails, setPostDetails] = useState({});

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
        setSearch(search);
        setPosts([]);
        setPage(1);
    }

    const loadMore = () => setPage(prevPage => prevPage + 1);

    const showModal = ({ title, body }) => {
        setModalOpen(true);
        setPostDetails({
            title,
            body,
        })
    }

    const closeModal = () => {
        setModalOpen(false);
        setPostDetails({})
    }

    const isPosts = Boolean(posts.length);

    return (
        <>
            <PostsSearchForm onSubmit={handleSearch} />
            {error && <p className={styles.error}>{error}</p>}
            {loading && <p>...Loading</p>}
            {isPosts && <PostsSearchList showModal={showModal} items={posts} />}
            {isPosts && <div className={styles.loadMoreWrapper}>
                <Button onClick={loadMore} type="button">Load more</Button>
            </div>}
            {modalOpen && <Modal close={closeModal}>
                            <h2>{postDetails.title}</h2>
                            <p>{postDetails.body}</p>
                        </Modal>}
        </>
    )
}

/*
class PostsSearch extends Component {
    state = {
        search: "",
        posts: [],
        loading: false,
        error: null,
        page: 1,
        modalOpen: false,
        postDetails: {}
    }

    async componentDidUpdate(_, prevState) {
        const { search, page } = this.state;
        if (search && (search !== prevState.search || page !== prevState.page)) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        const { search, page } = this.state;
        try {
            this.setState({
                loading: true,
            });
            const { data } = await searchPosts(search, page);
            this.setState(({ posts }) => ({
                posts: data?.length ? [...posts, ...data] : posts,
            }))
        }
        catch (error) {
            this.setState({
                error: error.message
            })
        }
        finally {
            this.setState({
                loading: false,
            })
        }
    }

    handleSearch = ({ search }) => {
        this.setState({
            search,
            posts: [],
            page: 1,
        })
    }

    loadMore = () => {
        this.setState(({ page }) => ({ page: page + 1 }));
    }

    showModal = ({title, body}) => {
        this.setState({
            modalOpen: true,
            postDetails: {
                title,
                body,
            }
        })
    }

    closeModal = ()=> {
        this.setState({
            modalOpen: false,
            postDetails: {}
        })
    }

    render() {
        const { handleSearch, loadMore, showModal, closeModal } = this;
        const { posts, loading, error, modalOpen, postDetails } = this.state;

        const isPosts = Boolean(posts.length);

        return (
            <>
                <PostsSearchForm onSubmit={handleSearch} />
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>...Loading</p>}
                {isPosts && <PostsSearchList showModal={showModal} items={posts} />}
                {isPosts && <div className={styles.loadMoreWrapper}>
                    <Button onClick={loadMore} type="button">Load more</Button>
                </div>}
                {modalOpen && <Modal close={closeModal}>
                                <h2>{postDetails.title}</h2>
                                <p>{postDetails.body}</p>
                            </Modal>}
            </>
        )
    }
}
*/
export default PostsSearch;