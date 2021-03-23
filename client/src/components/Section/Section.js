import { React, useState } from "react";
import styles from "./Section.module.css";


export default function Section(){

    const [description] = useState({
        greeting: <h1>Hey you!</h1>,
        para: <p>Do you want to have an impact?</p>,
        parb: <p>Define your own goals.</p>,
        parc: <p>Do you want to have an impact?</p>,
    })

    return (
        <div>
            <section className={styles.section}>
                {description.greeting}
                {description.para}
                {description.parb}
                {description.parc}
            </section>
        </div>
    )
}
