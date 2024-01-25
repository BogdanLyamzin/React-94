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

export default PostsSearch;