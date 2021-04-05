import {React, useState, useContext} from "react";
import {Link, withRouter } from "react-router-dom";
import { removeToken } from "../../helpers/auth";
import { AuthContext } from '../../context/Auth/AuthContext'

import { AppBar, Toolbar, Typography, IconButton, Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    },
    logoutButton:{
        marginRight: theme.spacing(3),
        color: 'white',
        "&:hover, &.Mui-focusVisible": { backgroundColor: "#1d1d1d" }

    }
  }));


const NavDash = (props) =>{

  const { history } = props;
  const { updateUser, user: {user}} = useContext(AuthContext) 

  const newUser = {
    user:{},
    loading: true,
    auth: false
  }

  const goAuth = () => {
    removeToken();
    updateUser(newUser)
    history.push(`/auth`)
  }

  const classes = useStyles();
  return(
      <div className={classes.root}>
      <AppBar position="static" className={classes.appColor}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Goalation
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {user.fullname}
          </Typography>
          <Tooltip title="Logout">
            <IconButton aria-label="" className={classes.logoutButton} onClick={goAuth}>
              <ExitToAppIcon/> 
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(NavDash)