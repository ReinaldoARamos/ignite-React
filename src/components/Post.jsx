import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
export function Post({author, publishedAt}) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-br', {
        day: '2-digit',
        month: 'long',
        hour:'2-digit',
        minute:'2-digit'
    }).format(publishedAt)
    return (
        <article className={styles.Post}>
            <header>
    
                
            <div className={styles.author}>
                    <Avatar src={author.avatarUrl} /> 
                    <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time>{publishedDateFormatted}</time>
            </header>

            <div className={styles.content}>
           <p> Esse é o tal jogo que é melhor que o "God of war 4" </p>
          <p> de usuário para ter uma ideia de como fazer um orçamento para limpar </p> 
         <p>o nome da empresa para que eu possa fazer um novo anúncio.</p>   
            </div>

  
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