import {React, useState, useContext, useEffect} from 'react'
import { useForm, Controller } from "react-hook-form";
import { Container, Typography, CssBaseline, TextField, Avatar, Button, Grid, Link, NativeSelect } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from "./styles";

import AuthContext from '../../context/Auth/AuthContext'
import UserContext from '../../context/User/UserContext'

export default function Form(props) {
    
    const { auth, authenticate } = useContext(AuthContext)   
    const { user, login, register } = useContext(UserContext)

    const { handleSubmit, control, errors } = useForm();
    const [ userForm, setUserForm ] = useState({})
    const [ optionForm, setOptionForm ] = useState(0)
    const [ flag, setFlag ] = useState(false)

    const onSubmit = data => {
        setUserForm(data)
        setFlag(true)
    }
    
    useEffect(() =>{
        if(flag){
            if(optionForm) register(userForm)
            if(!optionForm) login(userForm)
        }
    },[flag])

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" color="primary">
                      { optionForm ? 'Sign Up' : 'Sign in' }
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>  

                {
                optionForm
                ?
                <Signup errors={errors} control={control} classes={classes} setOptionForm={setOptionForm}/>
                :
                <Signin errors={errors} control={control} classes={classes} setOptionForm={setOptionForm}/>
                }

                <Options  optionForm={optionForm} setOptionForm={setOptionForm}/>


                </form>

            </div>
        </Container>
    )
}


const Signin = ({errors, control, classes, setOptionForm}) => {
    

    const ErrorHandler = errorProps =>{
        const [err, id] = [errorProps.errObj, errorProps.errProp];
        if(err[id]){
            const errorId = err[id];
            if(errorId.message){
                return <p className={classes.warning}>⚠ {errorId.message}</p>
            }
        }
        return <></>
    }

    const updateRoute = () =>{
        setOptionForm(0)
    }

    return(
        <>
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
            }       }
            
        />

        <ErrorHandler errObj={errors} errProp='password'/>

        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={updateRoute}
            >
            Sign In
        </Button>
        </>
    )
}
const Signup = ({errors, control, classes, setOptionForm}) => {
    

    const ErrorHandler = errorProps =>{
        const [err, id] = [errorProps.errObj, errorProps.errProp];
        if(err[id]){
            const errorId = err[id];
            if(errorId.message){
                return <p className={classes.warning}>⚠ {errorId.message}</p>
            }
        }
        return <></>
    }

    const updateRoute = () =>{
        setOptionForm(1)
    }

    return(
        <>
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
            }   }

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
            onClick={updateRoute}
            >
            Sign Up
         </Button>
        </>
    )
}

const Options = ({ optionForm, setOptionForm }) => {
    
    const update = () =>{
        optionForm ? setOptionForm(0): setOptionForm(1)
    }
    if(optionForm){
        
        return(
            <Grid 
                container 
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item >
                <Link onClick={update} href="#" variant="body2">
                    Sign in
                </Link>
                </Grid>
            </Grid>
        )
        
    }else{
        
        return(
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link onClick={update} href="#" variant="body2">
                    Sign Up
                </Link>
                </Grid>
            </Grid>
        )
    }

}
