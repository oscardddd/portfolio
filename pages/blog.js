import Head from "next/head"
import styles from "./blog.module.css"
import Header from "../components/Header.js";
export default function Blog(){
    return(
        <div>
            <Header/>
            I am literally turning my goblin mode on rn ~
            <h2 className={styles.text}>
                这个blog看起来非常的高级 听起来好像我要写什么高级的东西...
                But it turns out我甚至不想花钱做后端 可能等我变成了一个 senior SWE或者一个Phd或者一个电子厂哥们我就会考虑写几个technical blogs
                但是目前我还是干脆直接在我的blog.js里狂敲键盘
                最近混的实在差 被你亲爱的西北大学tech相关的academic社团拒光了 又有一种SWE混不长的感觉 突然又不知道自己要干啥
                Linguistics上课全是jb 美利坚现代口语 又不敢上Econ 怕太难 
                寄咯
                如果我连着几天没去上课建议去plex 1102敲敲门 也许我真的寄了 
                
            </h2>
            
            <h2 className = {styles.text2} >纵有疾风起 _ _ _ _ _</h2>

            
        </div>
        

        
    )
}