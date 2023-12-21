import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer>
            <a href="/">Site logo</a>
            <button className={styles.btn}>To top</button>
        </footer>
    )
}

export default Footer;