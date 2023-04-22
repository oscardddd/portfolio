import Image from "next/image"
import cc from "../public/clubconnect.png"
import cc_f from "../public/cc_favicon.png"
import pic2 from "../public/go-getter.jpg"
import apple from "../public/apple.png"
import styles from "./project.module.css"
import wex from "../public/Wex.png"
import Link from "next/link"


export default function Project(){
    return(
        <div className={styles.background}>
            <div className={styles.p1}>
                <Link href="https://www.clubconnect-app.com/">
                    <Image className={styles.img1} src={cc_f} width = {200} height={200}/>
                </Link>
                <div className={styles.content1}>
                    <div>ClubConnect is a student startup under the garage @ northwestern. 
                    It is a platform for enhancing extracurricular involvement to help students get the most out of their college experience. 
                    We have launched online and on AppStore.
                    </div>
                    <Link href="https://www.clubconnect-app.com/">https://www.clubconnect-app.com/</Link>
                    <Link className={styles.apple} href="https://apps.apple.com/us/app/clubconnect-app/id1659928304">
                        <Image src={apple}/>
                    </Link>
                    
                     
                </div>
                
            </div>
            <div className={styles.p3}>
                
                    
                    <Link href= "https://sites.northwestern.edu/gogetter/">
                        <Image src = {wex} width = {350} height={200}></Image>
                    </Link>

                    <div className={styles.content3}>

                        Wex, a second-hand exchange platform for college students. We designed it for WildHacks 2023.
                    </div>
                
                
            </div>
            <div className={styles.p2}>
                
                
                    <Link href= "https://dashboard.wildhacks.net/project/#MUGF">
                        <Image className={styles.img2} src = {pic2} width = {200} height={250}></Image>
                    </Link>

                    <div className={styles.content2}>
                        <div className={styles.text2}>
                            The Go-Getter is a height-adjustable shopping cart designed for people have trouble bending or lifting. It is 
                            a project for DTC-1, designed and made by Brynn Stasiulis, Clara Asseily, Kyle Yuen, and me.
                        </div>
                        
                        <Link href= "https://sites.northwestern.edu/gogetter/" >
                            Here is our final report
                        </Link>
                    </div>
                
                
            </div>
        </div>
    )
}