/* eslint-disable no-unused-vars */
import {React, useState} from 'react'
import {Container, Grid} from "@material-ui/core";
import { NavBar, Signin } from "../components";


export default function Auth() {

    return (
        <>
        <NavBar />
        <Signin />
        </>
    )
}