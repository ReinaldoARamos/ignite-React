import styles from "./Post.module.css"
export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div >
                    <img src="http://github.com/ReinaldoARamos.png" alt="" className={styles.avatar} /> 
                    <div className={styles.authorInfo}>
                        <strong>Reinaldo Ramos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time>Publicado há 1h</time>
            </header>
        </article>
    )
       
    
}