import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://i.pinimg.com/236x/cb/7e/87/cb7e8749021558f097169a16046af054.jpg" />
        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
       <header>
       <div className={styles.authorAndTime}>
            <strong>Reinaldo Aparecido Ramos</strong>
            <time title="11 de maio as 08:31" dateTime="2022-05-11 08:13:00">
              Publico há 1h
            </time>
          </div>
       </header>
       <p>Parabens buxa</p>
       </div>  
        <footer>
            Aplaudir
        </footer>
        </div>
   
    </div>
  );
}
