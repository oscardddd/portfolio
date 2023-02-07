import Image from "next/image"
import cc from "../public/clubconnect.png"
import cc_f from "../public/cc_favicon.png"
import apple from "../public/apple.png"
import styles from "./project.module.css"
import Link from "next/link"

export default function Project(){
    return(
        <div className={styles.background}>
            <div className={styles.p1}>
                <Link href="https://www.clubconnect-app.com/">
                    <Image className={styles.img1} src={cc_f} width = {200} height={200}/>
                </Link>
                <div className={styles.content1}>
                    <p >ClubConnect is a student startup under the garage @ northwestern. 
                    It is a platform for enhancing extracurricular involvement to help students get the most out of their college experience. 
                    We have launched online and on AppStore.
                    </p>
                    <Link href="https://www.clubconnect-app.com/">https://www.clubconnect-app.com/</Link>
                    <Link className={styles.apple} href="https://apps.apple.com/us/app/clubconnect-app/id1659928304">
                        <Image src={apple}/>
                    </Link>
                    
                     
                </div>
                
            </div>
        </div>
    )
}