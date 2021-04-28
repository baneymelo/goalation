/* eslint-disable no-unused-vars */
import {
    React,
    useState,
    createContext,
    useContext}
from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouteLink,
    Redirect
  } from "react-router-dom";
import {Container, Grid} from "@material-ui/core";
import { NavBar, Form, Signup } from "../components";
import AuthContext from '../context/Auth/AuthContext'

export default function Auth() {

    const { auth } = useContext(AuthContext)

    return (
        <>
        <Form />
        { auth.logged && <Redirect to='/dashboard'/>}
        </>
    )
}