import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import {format} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'as' HH:mm'h", {
        locale:ptBr
    })
 
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

                <time title="" dateTime="2022-05-11 08:13:30">{publishedDateFormatted}</time>
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