import { React, useContext } from "react"
import Moment from 'react-moment';
import { Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Link} from '@material-ui/core'
import { summaryStyles } from "./styles";

import pic from "../../assets/img/goal.gif";

import { AuthContext } from '../../context/Auth/AuthContext'
import { Load } from "../index";

const Summary = () => {

    const summaryClasses = summaryStyles();

    const { allGoal, user } = useContext(AuthContext) 


    const curr = allGoal?.length-1;
    const currentGoal = allGoal?.[curr];
    
    const toValidDate = d => {
        const date = new Date(d)
        return date;
    }


    if(currentGoal?.noob){
        return <></>
    }else{
        return(
            <>

                <Card className={summaryClasses.root}>
                <CardActionArea>
                    <CardMedia
                    className={summaryClasses.media}
                    image={pic}
                    title={currentGoal.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h3" component="body">
                        {currentGoal.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>Status: {currentGoal.status}</p>
                        <p>Periodicity: {currentGoal.period}</p>
                        <p>Expire date: <Moment format='YYYY/MM/DD'>{toValidDate(currentGoal.expire_date)}</Moment></p>
                      </Typography>
                      <Typography variant="body2" color="textPrimary" component="p">
                        <b>Donate: ${currentGoal.amount}</b>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </>
        )
}
}

export default Summary;