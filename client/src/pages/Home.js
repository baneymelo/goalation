
import {useContext} from 'react'
import {Redirect, Route, Switch} from "react-router-dom";

import { AuthContext } from '../context/Auth/AuthContext'
import { Main, Aboutus, Impact, NavBar, Load} from "../components";

const Home = () => {
    const { isLogged } = useContext(AuthContext)

    return(
    <>
        <NavBar />
        <Main />
        { isLogged && <Redirect to='/dashboard'/> }
    </>
    )
}

export default Home;