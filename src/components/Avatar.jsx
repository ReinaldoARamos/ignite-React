import styles from "./Avatar.module.css"
export function Avatar(props){
    return(
        <div>
             <img className={props.hasBorder ? avatarWithBorder : styles.avatar} src={props.src} />
        </div>
       
    )
}