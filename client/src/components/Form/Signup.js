import {React, useEffect, useState} from 'react'
import { Container, Typography, CssBaseline, TextField, Avatar, Button, NativeSelect, Grid, Link } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm, Controller } from "react-hook-form";

import useStyles from "./styles";
import axios from "../../helpers/axios";


export default function Signup(props) {
    
    const { handleSubmit, control, errors } = useForm();
    const [data, setData] = useState({ 
        email: '',
        fullname: '',
        password: '',
        user_type: ''
    })
    const [sign, setSign] = useState('Sign in')
    const [opt] = useState(['Sign in', 'Sign Up'])

    const updateSign = () =>{
        sign === opt[0] ? setSign(opt[1]) : setSign(opt[0])
    }
    
    const updateData = data =>{
        setData(data)
    }

    const onSubmit = obj => {
        updateData(obj) 
    }
    

    function ErrorHandler(errorProps){
        const [err, id] = [errorProps.errObj, errorProps.errProp];
        if(err[id]){
            const errorId = err[id];
            if(errorId.message){
                return <p className={classes.warning}>⚠ {errorId.message}</p>
            }
        }
        return <></>
    }

    const verifyData = () =>{
        if(data.email === '' && data.password === ''){
            return false;
        }
        return true;
    }

    useEffect(() =>{

        const postData = async (route) =>{
            const request = await axios.post(`/auth/${route}`, data);
            console.log(request.data.token);
            localStorage.setItem('token',request.data.token)
        }

        if(verifyData()){
            if(sign === 'Sign in'){
                postData('signin');
            }else{
                postData('signup');
            }
        }
    },[data]) 
    


    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="primary">
                      {sign}
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>                 

                <Controller
                    as={
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"                                
                        autoComplete="email"
                        autoFocus
                        />
                        }
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format"
                                }
                            }
                        }
                />

                <ErrorHandler errObj={errors} errProp='email'/>     


                <Controller
                    as={
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fullname"
                        label="Fullname"
                        name="fullname"
                        autoComplete="Fullname"
                        autoFocus
                        />
                    }
                    name="fullname"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "A name is required"
                    }}
                />

                <ErrorHandler errObj={errors} errProp='fullname'/>

                <Controller
                    as={
                        <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="Password"
                        autoFocus
                        />
                    }
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: 'Password should be at-least 8 characters.'
                            }
                    }}
                    
                />

                <ErrorHandler errObj={errors} errProp='password'/>
                
                <Controller
                    as={
                        <NativeSelect fullWidth>
                            <option value="User">User</option>
                            <option value="Foundation">Foundation</option>
                        </NativeSelect>
                    }
                    name="usertype"
                    control={control}
                    defaultValue="User"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    
                    >
                    {sign}
                </Button>

                <Grid 
                    container 
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item >
                    <Link onClick={updateSign} href="#" variant="body2">
                        {sign === 'Sign in' ? 'Sign Up' : 'Sign in' }
                    </Link>
                    </Grid>
                </Grid>
                
                </form>

            </div>
        </Container>
    )
}


