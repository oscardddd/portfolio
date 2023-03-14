import Head from "next/head"
import styles from "./blog.module.css"
import Header from "../components/Header.js";
export default function Blog(){
    return(
        <div>
            <Header/>
            I am literally turning my goblin mode on rn ~
            <h2 className={styles.text}> 
            又该如何面对这碌碌无为的人生 
            </h2>
            
            

            
        </div>
        

        
    )
}