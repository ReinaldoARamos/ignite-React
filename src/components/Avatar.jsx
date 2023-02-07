import styles from "./Avatar.module.css"
export function Avatar(props){
    return(
        <div>
             <img className={styles.avatar} src={props.src} />
        </div>
       
    )
}