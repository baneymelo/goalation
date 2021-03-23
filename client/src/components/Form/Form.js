/* eslint-disable no-unused-vars */
import {React, useState} from 'react'
import { Container, Typography, CssBaseline, TextField, Avatar, Button, Link, Grid, Select, MenuItem, NativeSelect } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm, Controller } from "react-hook-form";
import useStyles from "./styles";


export default function Form(props) {
    
    const { handleSubmit, control, errors } = useForm();
    const [form, setForm] = useState([]);
    

    const updateData = data =>{
        setForm(data)
    }
    
    const onSubmit = data => {
        updateData(JSON.stringify(data))    
    }
    
    const sendData = () =>{
        
        console.log(JSON.parse(form));
    }

    const classes = useStyles();

    if(props.auth === "signin"){
        return (
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" color="primary">
                        Sign in
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
                        {errors.email && <p className={classes.warning}>{"⚠ "+errors.email.message}</p>}
                    
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
                        {errors.fullname && <p className={classes.warning}>⚠ {errors.fullname.message}</p>}

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
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: 'Password should be at-least 8 characters.'
                                  }
                            }}
                            defaultValue=""
                        />
                        {errors.password && <p className={classes.warning}>⚠ {errors.password.message} </p>}

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
                                Sign In
                        </Button>


                    </form>

                    <Typography component="h1" variant="h5" color="primary">
                        {form}
                    </Typography>

                    </div>
            </Container>
        )
    }

}