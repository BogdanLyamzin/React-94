import styles from "./block.module.css";

const Block = ({title, children}) => {
    return (
        <div className={styles.block}>
            <h4 className={styles.blockTitle}>{title}</h4>
            {children}
        </div>
    )
}

export default Block;