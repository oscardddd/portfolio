import Image from "next/image"
import cc from "../public/clubconnect.png"
import cc_f from "../public/cc_favicon.png"
import pic2 from "../public/go-getter.jpg"
import apple from "../public/apple.png"
import styles from "./project.module.css"
import delta from "../public/delta.png"
import wex from "../public/Wex.png"
import Link from "next/link"


export default function Project(){
    return(
        <div className={styles.background}>
            <div className={styles.cn}>
                <Link href="https://dtr.northwestern.edu/projects/recdWuoRIEqiwium8">
                    <Image className={styles.imgcn} src={delta}></Image>
                </Link>
                <div className={styles.contentcn}>
                    I'm an undergraduate researcher at DTR program, where I build cool social-computing systems and conduct HCI research. I built the Collective Narrative API,
                    a storytelling framework that helps motivated novice content creators create multi-perspective 
                    stories and scaffold sourcing relevant pictures collaboratively from participating perspective groups through a context-aware mechanism.
                </div>
            </div>  
            <div className={styles.clubconnect}>
                
                <Image className={styles.img1} src={cc_f} width = {200} height={200}/>
                
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
            <div className={styles.wex}>
                
                    
                    <Link href= "https://dashboard.wildhacks.net/project/#MUGF">
                        <Image src = {wex} className={styles.imgwex}></Image>
                    </Link>

                    <div className={styles.contentwex}>

                        Wex, a second-hand exchange platform for college students. We designed it for WildHacks 2023.
                    </div>
                
                
            </div>
            <div className={styles.gogetter}>
                
                
                    <Link href= "https://sites.northwestern.edu/gogetter/">
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