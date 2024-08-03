import styles from "./index.module.css";
import Head from "next/head";
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
import Link from "next/link";
import Image from "next/image";
import profilepic from "../public/pic2.jpg";
import { StickyContainer, Sticky } from "react-sticky";
import Header from "../components/Header.js";
import schoolpic from "../public/school.png";
import swe from "../public/swe.jpg";
import hooper from "../public/hooper.jpg";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <meta content="width=device-width,initial-scale=1" />
      </Head>

      <Header className={styles.nav} />
      <div className={styles.background}>
        <div className={styles.box1}>
          <div className={styles.upperbox1}>About ⚆_⚆</div>

          <div className={styles.upperbox2}>
            <div>Hi all! My name is Qianli Dong (Oscar)</div>

            <div className={styles.line1}>
              I am currently pursuing a Bachelor's and Master's degree in
              Computer Science at{" "}
              <a href="https://www.northwestern.edu/" className={styles.link}>
                Northwestern University
              </a>
              . My academic background is diverse, with research experiences in
              Human-AI interaction, network experimentation, and ML systems.
              Presently, I am working with Professor{" "}
              <a href="https://www.fanlai.me/" className={styles.link}>
                Fan Lai
              </a>{" "}
              on designing an efficient Federated Learning system with dynamic
              model sharding. I also serve as a research assistant at{" "}
              <a
                href="https://aqualab.cs.northwestern.edu/"
                className={styles.link}
              >
                Northwestern Aqualab
              </a>{" "}
              , focusing on planetary-scale network systems.
            </div>
          </div>
        </div>

        <div className={styles.downnav}>
          <Link href="https://github.com/oscardddd">
            <AiFillGithub style={{ fontSize: "3em", color: "black" }} />
          </Link>
          <Link href="https://www.linkedin.com/in/qianli-dong-3391ab194/">
            <AiOutlineLinkedin style={{ fontSize: "3em", color: "black" }} />
          </Link>
          <Link href="mailto:qianlidong2025@u.northwestern.edu">
            <AiOutlineMail style={{ fontSize: "3em", color: "black" }} />
          </Link>

          <Link href="https://www.instagram.com/d_qianli/">
            <AiOutlineInstagram style={{ fontSize: "3em", color: "black" }} />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
