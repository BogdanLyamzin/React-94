import Button from "../Button/Button";
import MovieList from "../MovieList/MovieList";

import items from "../../data/movieList.json";

const Main = () => {
    return (
        <main>
            <h2>Page subtitle</h2>
            <p>page description</p>
            <Button text="Order me" type="button" />
            {/* const props = {
                text: "Order me",
                type: "button"
            };
            Button(props)
            */}
            <Button text="Make request" />
            <MovieList title="Best movies 2023" items={items} />
        </main>
    )
}

export default Main;
