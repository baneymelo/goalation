import {React, useContext, useState} from "react"

import CreateGoal from "./CreateGoal";
import Summary from "./Summary";
import History from "./History";

import { Grid, Typography } from '@material-ui/core'
import { goalStyles } from "./styles";

import { AuthContext } from "../../context/Auth/AuthContext";

const Goals = () => {

    const classes = goalStyles();

    const { allGoals } = useContext(AuthContext)



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
               <Summary />
            </Grid>
            <Grid item > 
                <br></br>
            </Grid>
            <Grid item > 
                <CreateGoal/>
            </Grid>
            <Grid item > 
                <History />
            </Grid>
        </Grid>
        </>
    )
    
}



const noGoals = (props) => {

    const classes = props.classes;

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
                <br></br>
            </Grid>
            <Grid item > 
            <Typography variant="h2" color="textSecondary" component="p">    
                Create a new Goal!
            </Typography>
            </Grid>
            <Grid item > 
                <CreateGoal/>
            </Grid>
        </Grid>
        </>
    )
}


export default Goals;