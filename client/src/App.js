/* eslint-disable no-unused-vars */
import {React, useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dash from "./pages/Dash";
import { ProtectedRoute } from './components/Content/ProtectedRoute';
import axios from "./helpers/axios";
import { getToken, setToken} from "./helpers/auth";
import { Aboutus, Impact, Load } from "./components";
import { AuthContext } from '../src/context/Auth/AuthContext'

import './App.css';

const App = () => {

  const { user, verifySession } = useContext(AuthContext)


  /* useEffect to verifySession */

  useEffect(() =>{
    verifySession()
  },[])

  if(user.loading && getToken()){
    return <Load/>
  }else{
    return (
      <Router>
            { user.auth && <Redirect to='/dashboard' /> }
          <Switch>
            <ProtectedRoute exact path="/dashboard" isAuth={user.auth} component={Dash}/>
            {/* <Route path='/dashboard' component={Dash} /> */}
            <Route path='/auth' component={Auth} />
            <Route path='/aboutus' component={Aboutus}/>
            <Route path='/impact' component={Impact}/>
            <Route exact path='/' component={Home} />
          </Switch>
      </Router>
    )
  }

}

export default App;
