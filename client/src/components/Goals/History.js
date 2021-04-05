import { React, useContext } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import Moment from 'react-moment';


import {historyStyles} from "./styles";

import { AuthContext } from '../../context/Auth/AuthContext'

const History = (props) => {

    const historyClasses = historyStyles();

    const { allGoal, user} = useContext(AuthContext) 

    const curr = allGoal?.length-1;
    const currentGoal = allGoal?.[curr];
    
    const toValidDate = d => {
        const date = new Date(d)
        return date;
    }

    


    if(currentGoal?.noob){
        return <></>
    }else{

    return (
        <TableContainer component={Paper}>
          <Table className={historyClasses.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Goal</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Periodicity</TableCell>
                <TableCell align="right">Expire</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allGoal.map((goal,i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                  <Link
                    component="button"
                    variant="body2"
                    >
                     {goal.name}
                    </Link>
                   
                  </TableCell>
                  <TableCell align="right">{goal.category}</TableCell>
                  <TableCell align="right">{goal.period}</TableCell>
                  <TableCell align="right"><Moment format='YYYY/MM/DD'>{toValidDate(goal.expire_date)}</Moment></TableCell>
                  <TableCell align="right">${goal.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    }
}

export default History;