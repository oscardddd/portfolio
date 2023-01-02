import styles from "./index.module.css"
import Head from 'next/head'
import {AiFillGithub,AiOutlineWechat,AiOutlineMail,AiOutlineLinkedin,AiOutlineInstagram, AiOutlineHome,AiOutlineExperiment,
  AiOutlineLaptop,AiOutlineZhihu} from "react-icons/ai"; 
import Link from "next/link";
import Image from "next/image";
import profilepic from "../public/pic2.jpg"

export default function Home() {
  return(
    <>
    <div className={styles.head}>
      <p className = {styles.text}>Hi! This is Qianli</p>
    </div>
    <div className={styles.background}>

      <div className={styles.navbar}>
        <div className={styles.leftnav}>
          <Link href= "/" className={styles.r1}>
                  Home
                  <AiOutlineHome/>
          </Link>
          <Link href= "/" className={styles.r2}>
                  中文 |
                  {/* <AiOutlineZhihu/> */}
          </Link>
              
        </div>
        <div className={styles.rightnav}>
          <Link href= "/" className={styles.l1}>
                  Projects
                  <AiOutlineExperiment/>
          </Link>
          <Link href= "/blog" className={styles.l2}>
                  Blog
                  <AiOutlineLaptop/>
          </Link>
          <Link href= "/" className={styles.l3}>
                Contact
                <AiOutlineMail/>
          </Link>
        </div>
      </div>
      <Image className= {styles.img} src = {profilepic} alt="profile pic" width={300} height={300}/>
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
      
      <style jsx global>{`
        body {
        margin: none;
        background-color:rgba(72, 122, 180, .5);
      }
    `}</style>
    </>
    


   
   
    
  )
}
