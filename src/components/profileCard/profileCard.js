"use client";
import styles from './profileCard.module.css'

export default function ProfileCard(){
    return (
       <div className={styles.container}>
            <h1 className={styles.text}>Codegrid</h1>
            <h1 className={styles.text2}>Full stack developer</h1>
            <h1 className={styles.text3}>I build full web applications with clean code, responsive design, and scalable architecture.</h1>
       </div> 
    )
}