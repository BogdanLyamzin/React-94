import { useState, useEffect, useRef, Component } from "react";

import styles from "./posts-search-form.module.css";

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({
        search: "",
    });

    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    }, [])

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state});
        reset();
    }

    const reset = () => {
        setState({
            search: ""
        });
    }

    console.log("render")

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
                <label>Enter search phrase</label>
                <input ref={inputRef} value={state.search} onChange={handleChange} required type="text" name="search" placeholder="Enter search phrase" />
            </div>
            <button type="submit">Search</button>
        </form>
    )
}

/*
class PostsSearchForm extends Component {
    state = {
        search: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({...this.state});
        this.setState({
            search: ""
        })
    }

    render() {
        const {handleChange, handleSubmit} = this;
        const {search} = this.state;

        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldGroup}>
                    <label>Enter search phrase</label>
                    <input value={search} onChange={handleChange} required type="text" name="search" placeholder="Enter search phrase" />
                </div>
                <button type="submit">Search</button>
            </form>
        )
    }
}
*/
export default PostsSearchForm;