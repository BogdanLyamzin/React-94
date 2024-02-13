import {useSelector} from "react-redux";

import { selectUser } from "../../../redux/auth/auth-selectors";

import styles from "./navbar-user.module.css";

const NavbarUser = ()=> {
    const {name} = useSelector(selectUser);

    return (
        <div className={styles.block}>
            {name} 
            <button>Logout</button>
        </div>
    )
}

export default NavbarUser;