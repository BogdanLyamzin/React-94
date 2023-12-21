import MovieListItem from "./MovieListItem";

const movieListStyles = {
    margin: "20px 0",
}

const MovieList = ({ title, items = [] }) => {

    const elements = items.map(item => <MovieListItem key={item.id} title={item.title} year={item.year} />);
    // const elements = items.map(({id, ...other}) => <MovieListItem key={id} {...other} />);

    return (
        <>
            {title && <h3>{title}</h3>}
            <ul styles={movieListStyles}>
                {elements}
            </ul>
        </>
    )
}

export default MovieList;