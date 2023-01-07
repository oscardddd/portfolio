import styles from "./index.module.css"
import Head from 'next/head'
import {AiFillGithub,AiOutlineWechat,AiOutlineMail,AiOutlineLinkedin,AiOutlineInstagram, AiOutlineHome,AiOutlineExperiment,
  AiOutlineLaptop,AiOutlineZhihu} from "react-icons/ai"; 
import Link from "next/link";
import Image from "next/image";
import profilepic from "../public/pic2.jpg"
import { StickyContainer,Sticky} from "react-sticky";
import Header from "../components/Header.js";
import schoolpic from "../public/school.png"
import swe from "../public/swe.jpg"
import hooper from "../public/hooper.jpg"



export default function Home() {
  return(
    <>
    <Head>
        <meta content="width=device-width, initial-scale=1" />

    </Head>
    <nav className={styles.nav}>
      <Header/>
    </nav>
    <div className={styles.background}>
 
        <div className={styles.box1}>
          <div className={styles.upperbox1}>About ⚆_⚆</div>
         
          <div className={styles.upperbox2}> 
            <div>Hi all! My name is Qianli Dong(Oscar), I am a.....</div>
            
            <div className={styles.line1}>
              <Link href="https://www.northwestern.edu/">
                <Image src={schoolpic} width={200} height={200}></Image>
              </Link>
              <div>Sophomore at Northwestern University, IL</div>
            </div>
            <div className={styles.line2}>
              <Image className={styles.sweimg} src={swe} width={200} height={200} ></Image>
              <div>Software Engineer</div>
              <div className={styles.line21}>(bad at CSS I know)</div>
            </div>
            <div className={styles.line3}>
              <Image className={styles.hoop} src={hooper} width={200} height={200}></Image>
              <div className={styles.line31}>小黑子</div>
              <div>Hooper</div>
            </div>
          </div>  
        </div>
      
        
  
      <div className={styles.downnav}>
        <Link href="https://github.com/oscardddd">
          <AiFillGithub style={{ fontSize: '3em',color:'black'}}/>
        </Link>
        <Link href="https://www.linkedin.com/in/qianli-dong-3391ab194/">
          <AiOutlineLinkedin style={{ fontSize: '3em',color:'black'}}/>
        </Link>
        <Link href="mailto:qianlidong2025@u.northwestern.edu">
          <AiOutlineMail style={{ fontSize: '3em',color:'black'}}/>
        </Link>
       
        <Link href="https://www.instagram.com/d_qianli/">
          <AiOutlineInstagram style={{fontSize:'3em',color:'black'}}/>
        </Link>
      </div>
      </div>
      
     
    </>
    


   
   
    
  )
}
