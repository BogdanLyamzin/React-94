import MovieListItem from "./MovieListItem";

import styled from "@emotion/styled";

const Wrapper = styled.div`
    margin: 20px;

    .title {
        font-size: 24px;
    }
`

const MovieList = ({ title, items = [] }) => {

    const elements = items.map(item => <MovieListItem key={item.id} title={item.title} year={item.year} />);
    // const elements = items.map(({id, ...other}) => <MovieListItem key={id} {...other} />);

    return (
        <Wrapper>
            {title && <h3 className="title">{title}</h3>}
            <ul className="movie-list">
                {elements}
            </ul>
        </Wrapper>
    )
}

export default MovieList;