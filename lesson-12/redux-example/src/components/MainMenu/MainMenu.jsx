import { NavLink } from "react-router-dom";

import styles from "./main-manu.module.css";

const MainMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.link} to="/">Home page</NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/my-books">My books</NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/my-favorite-books">My favorite books</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu;