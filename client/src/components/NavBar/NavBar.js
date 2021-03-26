
import {React, useState} from "react";
import { Link } from 'react-router-dom'


import styles from './NavBar.module.css'
import Button from '@material-ui/core/Button'


const NavBar = () => {

    const [display, setDisplay] = useState(true);

    const updateNavbar = () =>{
        setDisplay(false)
    }

    if(display){

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
           
            <Button variant="contained" color="primary" onClick={updateNavbar}>
            <Link to="/auth"/>
            Login
            </Button>
        </nav>
        )
    }
    return(<></>)

    }





export default NavBar;