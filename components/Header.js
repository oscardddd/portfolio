import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineWechat,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineHome,
  AiOutlineExperiment,
  AiOutlineLaptop,
  AiOutlineZhihu,
} from "react-icons/ai";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.head}>
        <div className={styles.text}>Hi! This is Qianli</div>
      </div>

      <div className={styles.rightnav}>
        <Link href="/" className={styles.r1}>
          Home
          <AiOutlineHome />
        </Link>
        {/* <Link href= "/chinese" className={styles.r2}>
                        中文 |
                    {/* <AiOutlineZhihu/> */}
        {/* </Link>  */}
        <Link href="/#projects-section" className={styles.l1}>
          Projects
          <AiOutlineExperiment />
        </Link>
        <Link href="/blog" className={styles.l2}>
          Blog
          <AiOutlineLaptop />
        </Link>
        <Link href="/cv" className={styles.l3}>
          CV
          <AiOutlineMail />
        </Link>
        <Link href="/resume" className={styles.l3}>
          Resume
          <AiOutlineMail />
        </Link>
      </div>
    </div>
  );
};
export default Header;
