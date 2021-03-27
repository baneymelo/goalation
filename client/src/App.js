/* eslint-disable no-unused-vars */
import {React, useState, useEffect, useContext} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dash from "./pages/Dash";
import Load from "./components/Load/Load";
import './App.css';
import { setToken, getToken, removeToken, initAxiosInterceptors } from "./helpers/auth";
import axios from './helpers/axios';
import { AuthContext } from '../src/context/Auth/AuthContext'

initAxiosInterceptors();


const App = () => {

  const { isLogged, setIsLogged } = useContext(AuthContext)
  
    return (
      <Router>
        <Switch>
          <Route path='/dashboard' component={Dash} />
          <Route path='/auth' component={Auth} />
          { 
            isLogged 
            ? <Redirect to='dashboard'/>
            : <Redirect to=''/> 
          }
        </Switch>
      </Router>
    )
}

export default App;
