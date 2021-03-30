import {useContext} from 'react'
import {Redirect, HashRouter} from "react-router-dom";

import { AuthContext } from '../context/Auth/AuthContext'
import { NavDash } from "../components";
import Typography from '@material-ui/core/Typography'

const Dash = () => {
    const { user: {user} } = useContext(AuthContext)
    console.log(user);
    return (
        <>
            <NavDash />
            <Typography variant="h1" color="initial">
                {user.fullname}
            </Typography>
        </>
    )
}

export default Dash;