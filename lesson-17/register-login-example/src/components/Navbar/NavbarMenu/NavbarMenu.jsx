import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectIsLogin } from "../../../redux/auth/auth-selectors";

import menuItems from "./menuItems";

import styles from "./navbar-menu.module.css";

const NavbarMenu = () => {
    const isLogin = useSelector(selectIsLogin);

    const filteredMenuItems = !isLogin ? menuItems.filter(item => !item.private) : menuItems;

    const elements = filteredMenuItems.map(({id, to, text}) => (
                                                        <li key={id}>
                                                            <NavLink className={styles.link} to={to}>{text}</NavLink>
                                                        </li>
                                                        ))

    return (
        <ul className={styles.menu}>
           {elements}
        </ul>
    )
}

export default NavbarMenu;