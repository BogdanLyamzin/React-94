import useLang from "../../hooks/useLang";

import LanguageSwitcher from "../LanguageSwitcher";

import styles from "./Navbar.module.css";

import locale from "./locale.json";

const Navbar = ()=> {
    const {lang} = useLang();

    const menuTitle = locale.menu[lang];

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{menuTitle}</div>
            <LanguageSwitcher />
        </nav>
    )
}

export default Navbar;