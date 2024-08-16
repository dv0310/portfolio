import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
     <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
       <img 
        src={getImageUrl("about/aboutImage.png")} 
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
            <div className={styles.aboutItemText}>
                <h3>Frontend developer</h3>
                <p>I'm frontend developer with experience in building responsive
                  and optimized sites</p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
            <div className={styles.aboutItemText}>
                <h3>SQL</h3>
                <p>I have significant experience in SQL roles, managing databases and ensuring efficient data retrieval and manipulation.</p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon"/>
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>I have designed multiple landing pages and have systems as well</p>
            </div>
            </li>
            </ul>
        </div>
     </section>);
};