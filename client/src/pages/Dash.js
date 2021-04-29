/* eslint-disable no-unused-vars */
import {useContext, useState, useEffect} from 'react'
import { withRouter} from "react-router-dom";

import AuthContext from '../context/Auth/AuthContext'
import UserContext from '../context/User/UserContext'
import GoalContext from '../context/Goal/GoalContext'

/* import Goals from "../components/Goals/Goals";
import Profile from "../components/Profile/Profile";
import Settings from "../components/Settings/Settings"; */

import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Container';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FlagIcon from '@material-ui/icons/Flag';
import SettingsIcon from '@material-ui/icons/Settings';

import useStyles from "./styles";


const Dash = (props) => {

    const { history } = props;
    
    /* MUI LOGIC */

    const classes = useStyles();
    const theme = useTheme();

    const [ open, setOpen ] = useState(false);
  
    const handleDrawerOpen = () => {
        setOpen(true);
    };
  
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const { auth, authenticate, unAuthenticate } = useContext(AuthContext) 
    const { user, logout } = useContext(UserContext) 
    const { goal, saveGoal, loadGoals } = useContext(GoalContext)
  
    /* NAVDASH LOGIC */
  
    const goAuth = () => {
        logout();
        history.push(`/auth`)
    }

    console.log(user);

    /* DASH LOGIC */
    
    const [ content, setContent ] = useState(1);
    
    const handlerClick = e => {
        const opt = e.currentTarget.getAttribute('index')
        setContent(~~opt);
        console.log(opt);
    }

    useEffect(()=>{
        loadGoals()
    },[])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}
            >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                [classes.hide]: open,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.typo} noWrap>
                Goalation
            </Typography>
            <Typography variant="h6" className={classes.typo} noWrap>
                {user.fullname}
            </Typography>
            <Tooltip title="Logout">
                <IconButton aria-label="" className={classes.logoutButton}  onClick={goAuth}>
                    <ExitToAppIcon/> 
                </IconButton>
            </Tooltip>
            </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
                })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
                }}
            >
                <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Profile', 'Goals', 'Settings'].map((text, index) => (
                    <ListItem button key={text} index={index} onClick={handlerClick}>
                        <ListItemIcon> 
                            { 
                                index === 0  
                                ? <AccountCircleIcon/>
                                : index === 1   
                                    ? <FlagIcon/>
                                    : index === 2 
                                        ? <SettingsIcon/>
                                        : false
                            } 
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
                <Divider />
            </Drawer>
            
            {/* { 
            content === 0  
                ? <Profile/>
                : content === 1   
                    ? <Goals/>
                    : content === 2 
                        ? <Settings/>
                        : false
            }  */}
        </div>
    )
}

export default withRouter(Dash);
