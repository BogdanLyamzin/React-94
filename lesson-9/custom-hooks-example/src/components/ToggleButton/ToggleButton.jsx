import { useState } from "react";

import styles from "./toggle-button.module.css";

const ToggleButton = ({text}) => {
    const [active, setActive] = useState(false);

    const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return <button onClick={()=> setActive(prevState => !prevState)} className={fullClassName} type="button">{text}</button>
}

export default ToggleButton;