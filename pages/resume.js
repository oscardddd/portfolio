import styles from "./blog.module.css"


export default function Resume(){
    return(
        <div className={styles.pdf}>
            <iframe src="https://drive.google.com/file/d/1uaZmd11OyAyEROnBYo1YHMQjSLcEBTBj/preview" width="100%" height="100%" allowFullScreen = "true"></iframe>
        </div>
    )
}