import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
export function Post() {

    /*
      <header>
    
                
            <div className={styles.author}>
                    <Avatar src="http://github.com/ReinaldoARamos.png"  /> 
                    <div className={styles.authorInfo}>
                    <strong>Reinaldo Ramos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
           <p> Esse é o tal jogo que é melhor que o "God of war 4" </p>
          <p> de usuário para ter uma ideia de como fazer um orçamento para limpar </p> 
         <p>o nome da empresa para que eu possa fazer um novo anúncio.</p>   
            </div>
    */ 
    return (
        <article className={styles.Post}>
          

  
            <form className={styles.commentForm}>
                <strong>
                    Deixe seu feedback

                </strong>

                <textarea 
                placeholder="Deixe seu comentario"
                />
                <footer>
                <button type="submit">Comentar</button>
                </footer>
                
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
       
    
}