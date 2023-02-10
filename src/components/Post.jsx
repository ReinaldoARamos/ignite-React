import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

const comment = [
    1,
    2,
    3
]
export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'as' HH:mm'h", {
        locale:ptBr
    })
 
        const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
            locale: ptBr,
            addSuffix: true,
        })

        function handleComment() {
            event.preventDefault();
            console.log("oi")
        }
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

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type === 'paragraph'){
                        return(
                            <p>{line.content}</p>
                        )
                    }
                })}
            </div>

  
            <form onSubmit={handleComment} className={styles.commentForm}>
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
                    {comment.map(line => {
                        return <Comment/>
                    })}
            </div>
        </article>
    )
       
    
}