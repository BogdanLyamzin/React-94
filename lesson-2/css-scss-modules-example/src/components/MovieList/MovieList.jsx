import MovieListItem from "./MovieListItem";

import styles from "./movie-list.module.css";

const MovieList = ({ title, items = [] }) => {

    const elements = items.map(item => <MovieListItem key={item.id} title={item.title} year={item.year} />);
    // const elements = items.map(({id, ...other}) => <MovieListItem key={id} {...other} />);

    return (
        <>
            {title && <h3>{title}</h3>}
            <ul className={styles.list}>
                {elements}
            </ul>
        </>
    )
}

export default MovieList;