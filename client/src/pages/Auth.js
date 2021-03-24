/* eslint-disable no-unused-vars */
import {React, useState, useEffect} from 'react'
import {Button, Container, Grid, Link} from "@material-ui/core";

import { Form } from "../components";


export default function Auth() {
    const [auth, setType] = useState('Sign in')

    const handlerClick = () =>{
        auth === 'Sign in' ? setType('Sign Up') : setType('Sign in')
    }

    return (
        <Container>
            <Form auth={auth}/>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2" onClick={handlerClick}>
                    {auth === 'Sign in' ? 'Sign Up': 'Sign in' }
                </Link>
                </Grid>
            </Grid>
        </Container>
    )
}