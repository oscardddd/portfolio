import Head from "next/head"
import styles from "./blog.module.css"

export default function Blog(){
    return(
        <div>
            <Head >
                <div className={styles.text}>Blog</div>
            </Head>
            
            
        </div>
    )
}