import styles from "./button.module.scss";

const Button = ({text, type = "submit", active = false})=> {
    // const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;
    const fullClassName = active ? styles.btnActive : styles.btn;

    return <button className={fullClassName} type={type}>{text}</button>
}

export default Button;