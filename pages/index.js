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
import cc from "../public/clubconnect.png";
import cc_f from "../public/cc_favicon.png";

import delta from "../public/delta.png";
import collecto from "../public/collecto.png";
import ieee from "../public/ieee.jpg";
import cs from "../public/cs.png";
import aqualab from "../public/aqualab.png";
import raft from "../public/raft.png";
import racket from "../public/racket.png";
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
            <div>Hi! My name is Qianli Dong (Oscar)</div>

            <div className={styles.line1}>
              <div>
                I am currently at my 4th year pursuing a Bachelor's and Master's
                degree in Computer Science at{" "}
                <a href="https://www.northwestern.edu/" className={styles.link}>
                  Northwestern University
                </a>
                . My academic background is diverse, with research experiences
                in Human-AI interaction, network experimentation, and ML
                systems. Presently, I am working with Professor{" "}
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
            <div className={styles.line1}>
              <div>
                In the past, I've worked at data engineering group at{" "}
                <a href="https://en.inspur.com/" className={styles.link}>
                  Inspur
                </a>{" "}
                and on business persona analysis platform at{" "}
                <a
                  href="https://pitchbook.com/profiles/company/266265-82#overview"
                  className={styles.link}
                >
                  Jinxiandai Information
                </a>{" "}
                as an intern. I've also served as an undergraduate teaching
                assistant for Computer Networking, Database Systems, and
                Generative Methods at Northwestern.
              </div>
            </div>

            <div className={styles.line1}>
              <div>
                Please see my{" "}
                <a href="/resume" className={styles.link}>
                  Resume
                </a>{" "}
                for a full list of reserch, work, and other experiences.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box1}>
          <div className={styles.upperbox1} id="projects-section">
            Featured Projects
          </div>
          <div className={styles.upperbox2}>
            <div className={styles.upperbox3}>
              <div>Northwestern Aqualab</div>
              <div className={styles.line1}>
                <Link href="https://aqualab.cs.northwestern.edu/">
                  <Image className={styles.imgcn} src={aqualab}></Image>
                </Link>

                <div>
                  I am a research assistant at Northwestern Aqualab, advised by{" "}
                  <a
                    href="https://users.cs.northwestern.edu/~fabianb/"
                    className={styles.link}
                  >
                    Fabián E. Bustamante
                  </a>{" "}
                  . I primarily work on web traffic analysis projects, where I
                  implemented a Playwright crawler that automatically detect and
                  login to websites across the globe with Google SSO. I've also
                  worked on analyzing privacy policy documents across 11
                  countries with NLP methods.
                  <br></br>{" "}
                  <a
                    href="https://github.com/oscardddd/imc2023-sso"
                    className={styles.link}
                  >
                    code
                  </a>
                  ,{" "}
                  <a
                    href="https://drive.google.com/file/d/1Nk428Hj6HjIHC_OgbEaoZiDJWA5g2tm2/view?usp=sharing"
                    className={styles.linkb}
                  >
                    technical report
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.upperbox3}>
              <div>Collecto</div>
              <div className={styles.line1}>
                <Link href="https://drive.google.com/file/d/1QjYslcCCKMMNJM57wPN8KxjXlD4rnSFj/view">
                  <Image className={styles.imgcn} src={collecto}></Image>
                </Link>

                <div>
                  Advised by{" "}
                  <a
                    href="https://youralien.github.io/"
                    className={styles.link}
                  >
                    Ryan Louie
                  </a>{" "}
                  , I designed and implemented Collecto, a Large Language Model
                  (LLM) based agent that aims at helping people connect with
                  friends at distance by generating prompts of mutual interest
                  and managing interpersonal connections. Feel free to{" "}
                  <a
                    href="https://github.com/oscardddd/Collecto"
                    className={styles.link}
                  >
                    try it on Discord
                  </a>{" "}
                  with your friend group!
                  <br></br>
                  <a
                    href="https://github.com/oscardddd/Collecto"
                    className={styles.link}
                  >
                    code
                  </a>
                  ,{" "}
                  <a
                    href="https://drive.google.com/file/d/1QjYslcCCKMMNJM57wPN8KxjXlD4rnSFj/view"
                    className={styles.linkb}
                  >
                    paper
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.upperbox3}>
              <div>ClubConnect</div>

              <div className={styles.line1}>
                <Link href="https://www.linkedin.com/company/clubconnect-app/">
                  <Image
                    className={styles.img1}
                    src={cc_f}
                    width={150}
                    height={150}
                  />
                </Link>

                <div>
                  I was a founding member and backend developer of ClubConnect,
                  a student startup incubated by{" "}
                  <a
                    href="https://www.thegarage.northwestern.edu/"
                    className={styles.link}
                  >
                    The Garage at Northwestern
                  </a>
                  . ClubConnect is a platform designed to help club
                  administrators manage and advertise their clubs, while also
                  assisting students in enhancing their extracurricular
                  involvement in college. The platform was successfully launched
                  on the iOS App Store.
                </div>
              </div>
            </div>
            <div className={styles.upperbox3}>
              <div>Golang distributed system</div>

              <div className={styles.line1}>
                <Link href="https://aqualab.cs.northwestern.edu/courses/cs-345-ds-s24/">
                  <Image className={styles.imgcn} src={raft}></Image>
                </Link>

                <div>
                  During a 10-week course at Northwestern (
                  <a
                    href="https://aqualab.cs.northwestern.edu/courses/cs-345-ds-s24/"
                    className={styles.link}
                  >
                    CS 345 Distributed System
                  </a>{" "}
                  ) , I collaborated with three other students to implement a
                  high fault-tolerance MapReduce framework, a snapshot method
                  based on Chandy-Lamport algorithm, and a simulated Raft
                  consensus protocol that includes leader election, heartbeat
                  messages, log replication, and persistence layer read/write
                  operations.
                </div>
              </div>
            </div>

            <div className={styles.upperbox3}>
              <div>CrowdScope</div>

              <div className={styles.line1}>
                <Link href="https://www.linkedin.com/company/northwestern-university-ieee-student-branch/">
                  <Image className={styles.imgcn} src={cs}></Image>
                </Link>

                <div>
                  I was fortunate to be a project manager at{" "}
                  <a
                    href="https://www.linkedin.com/company/northwestern-university-ieee-student-branch/"
                    className={styles.link}
                  >
                    Northwstern IEEE
                  </a>
                  's technical program, where I lead a team of 6 to design and
                  develop CrowdScope, an App that uses crowdsourcing to estimate
                  crowdedness across campus facilities.
                  <br></br>
                  <a
                    href="https://github.com/IEEE-campusmap"
                    className={styles.link}
                  >
                    code
                  </a>{" "}
                  <a
                    href="https://docs.google.com/presentation/d/1RPYAEU-YqetYFN0shX51CtfuKva51X-sDF01QjHjQrs/edit?usp=sharing"
                    className={styles.linkb}
                  >
                    presentation
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.upperbox3}>
              <div>Contract checker for high-order functions</div>

              <div className={styles.line1}>
                <Link href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/324-424.html">
                  <Image className={styles.imgcn} src={racket}></Image>
                </Link>

                <div>
                  Based on the original paper, I collaborate with two others to
                  create a semantics model that features full type system and
                  contract checking for higher-order functions using Racket. I
                  Employed PLT Redex's pattern language module to implement
                  different reduction relations based on lambda calculus.
                  <br></br>
                  <a
                    href="https://github.com/oscardddd/396_Contract/"
                    className={styles.link}
                  >
                    code
                  </a>{" "}
                  <a
                    href="https://github.com/oscardddd/396_Contract/blob/main/Model%20Presentation%20(1).pptx"
                    className={styles.linkb}
                  >
                    presentation
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.upperbox3}>
              <div>Collective Narrative</div>

              <div className={styles.line1}>
                <Link href="https://dtr.northwestern.edu/projects/recdWuoRIEqiwium8">
                  <Image className={styles.imgcn} src={delta}></Image>
                </Link>

                <div>
                  I was an undergraduate researcher at DTR program advised by{" "}
                  <a
                    href="https://youralien.github.io/"
                    className={styles.link}
                  >
                    Ryan Louie
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://eecs.northwestern.edu/~hq/"
                    className={styles.link}
                  >
                    Haoqi Zhang
                  </a>
                  , where I built social-computing systems and conducted HCI
                  research. I built the Collective Narrative API, a storytelling
                  framework that helps motivated novice content creators create
                  multi-perspective stories and scaffolds sourcing relevant
                  pictures collaboratively from participating groups through a
                  context-aware mechanism.
                </div>
              </div>
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
