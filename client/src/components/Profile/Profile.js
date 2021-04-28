import {React, useContext, useState} from "react"

import { Grid, Typography } from '@material-ui/core'
import { profileStyles } from "./styles";

import { AuthContext } from "../../context/Auth/AuthContext";

const Profile = () => {

    const classes = profileStyles();

    const { user: {user}, allGoal } = useContext(AuthContext)

    console.log(user);

    const totalMount = () => {
        let total = 0
        for (const i in allGoal) {
            total += allGoal[i].amount;
        }
        return total;
    }

    if(!allGoal?.length){
        return <></>

    }else{

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
                    Total goals / <b>{allGoal.length}</b>
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    Total amount / <b>${totalMount()} </b>
                </Typography>
                
            </Grid>
            </>
        )
    }

    
}



export default Profile;