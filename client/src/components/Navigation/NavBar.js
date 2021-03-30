import {React, useState} from "react";
import {Link, withRouter } from "react-router-dom";

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import styles from './NavBar.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appColor:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }));



const NavBar = (props) => {

  const { history } = props;

  const goPath = {
    auth() { history.push('/auth')},
    aboutus() { history.push('/aboutus')},
    impact() { history.push('/impact')},
    home() { history.push('/')},
  }

  return(  
    <nav className={styles.nav}>
      <div className={styles.navTitle}>
          <p className={styles.navLink} onClick={goPath.home}>Goalation.</p>
      </div>
      <ul className={styles.navMenu}>
        <li>
          <p className={styles.navLink} onClick={goPath.home}>Your Goals.</p>
        </li>
        <li>
          <p className={styles.navLink} onClick={goPath.impact}>Your Impact.</p>
        </li>
        <li>
          <p className={styles.navLink} onClick={goPath.aboutus}>About Us.</p>
        </li>
      </ul>
      <Button variant="contained" color="primary" onClick={goPath.auth}>
        Login
      </Button>
    </nav>
  )
}


export default withRouter(NavBar)