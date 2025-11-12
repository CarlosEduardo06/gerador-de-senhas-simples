import styles from "./styles.module.css";

export default ({className,children}) => {
    return <div className={styles.modalContainer + " " + className}>
        {children}
    </div>
}