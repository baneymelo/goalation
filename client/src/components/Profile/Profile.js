import {React, useContext, useState} from "react"

import { Grid, Typography } from '@material-ui/core'
import { profileStyles } from "./styles";

import GoalContext from "../../context/Goal/GoalContext";
import UserContext from "../../context/User/UserContext";

const Profile = () => {

    const classes = profileStyles();

    const { goal } = useContext(GoalContext)
    const { user } = useContext(UserContext)

    return(
        <>
        <Grid
                container
                direction="column"
                justify="center"
                justifyContent="center"
                alignItems="center"
            >
            <Grid item  className={classes.space} /> 
        
            <Grid item > 
            <Typography variant="h2" color="textPrimary" component="p">
                Profile
            </Typography>
            </Grid>
            <Grid item > 
            <Typography variant="h2" color="textSecondary" component="p">
                <br></br>
            </Typography>
            </Grid>

            <Grid item > 
            <Typography variant="h2" color="textSecondary" component="p">
                <b>{user.fullname}</b> / <i>name</i>
            </Typography>
            </Grid>
            <Grid item > 
            <Typography variant="h2" color="textSecondary" component="p">
                <b>{user.email}</b> / <i>email</i>
            </Typography>
            </Grid>
            <Grid item > 
            <Grid item > 
            <Typography variant="h2" color="textSecondary" component="p">
                <br></br>
            </Typography>
            </Grid>
            <Typography variant="h3" color="textPrimary" component="p">
                Goals info
            </Typography>
            </Grid>
            <Typography variant="h5" color="textSecondary" component="p">
                Total goals / <b>{goal.length}</b>
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
                Total amount / <b>TOTAL</b>
            </Typography>
            
        </Grid>
        </>
    )
}

export default Profile;