import styles from "./my-book-list.module.css";

const MyBookList = ({ items, deleteBook }) => {
    const elements = items.map(({_id, title, author})=> 
        <li key={_id}>Author: {author}. Title: {title}. <button onClick={()=> deleteBook(_id)} type="button">Delete</button></li>)
    
        return (
            <ol className={styles.list}>
                {elements}
            </ol>
    )
}

export default MyBookList;