import "./movie-list.css";

const MovieList = ({ title, items }) => {
    const elements = items.map(item => <li key={item.id}>{item.title}, {item.year}</li>);

    return (
        <>
            <h3>{title}</h3>
            <ul className="movie-list">
                {elements}
            </ul>
        </>
    )
}

export default MovieList;