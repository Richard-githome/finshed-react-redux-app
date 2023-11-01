import styles from '../styles/App.module.css'

const HeaderComponent =()=>{
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.header_container}>
            <h1 className={styles.header_title}>Todo App</h1>
            </div>
        </div>
    )
}

export default HeaderComponent;