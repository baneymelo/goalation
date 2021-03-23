import React from "react";
import styles from './Footer.module.css'


const Footer = () => {
    return(
    <nav className={styles.nav}>
        <div className={styles["nav-title"]}>
            <a href="index.html">Goalation</a>
        </div>
        <ul className={styles["nav-menu"]}>
            <li>
                <a className={styles["nav-link"]} href="#link">Your Goals.</a>
            </li>
            <li>
                <a className={styles["nav-link"]} href="#link">Your Impact.</a>
            </li>
            <li>
                <a className={styles["nav-link"]} href="#link">About Us.</a>
            </li>
        </ul>
            <div className={styles["nav-login"]}>Login</div>
    </nav>
    )
}

export default Footer;