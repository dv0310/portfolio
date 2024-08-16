import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return <seection className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hey there! I'm Dilip,</h1>
        <p className={styles.description}> Java Full Stack Developer with 3 years of experience specializing in Java, Spring Boot, Spring MVC, and DevOps. Proven track record in designing and implementing high-performance server-side and client-side applications, developing integration solutions, and handling real-time troubleshooting. Experienced in Agile (Scrum) environments with strong expertise in Oracle, JavaScript, and Bootstrap. I specialize in both Front End and Back End development, using tools like Visual Studio Code and Spring Tool Suite. I'm skilled in Angular, React.js, and Spring framework for building dynamic websites. Let's work together to make your web development dreams a reality!</p>
        <a href="mailto:dilipv.uf11@gmail.com" className={styles.contactBtn}>
            Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
       <div className={styles.topBlur} />
       <div className={styles.bottmBlur} />
  </seection>;
}
