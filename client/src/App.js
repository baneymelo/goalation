/* eslint-disable no-unused-vars */
import {React, useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dash from "./pages/Dash";
import { ProtectedRoute } from './components/Content/ProtectedRoute';
import { getToken, setToken} from "./helpers/auth";
import { Aboutus, Impact, Load } from "./components";
import AuthContext from './context/Auth/AuthContext'
import UserState from './context/User/UserState'
import GoalState from './context/Goal/GoalState'

import './App.css';

const App = () => {

  const { auth, authenticate } = useContext(AuthContext)

  useEffect(() =>{
    authenticate()
  },[])

  if(auth.isLoading && getToken()){
    return <Load/>
  }else{
    return (
      <UserState>
      <Router>
            { auth.logged && <Redirect to='/dashboard' /> }
          <Switch>
            <GoalState>
              <ProtectedRoute exact path="/dashboard" component={Dash}/>
            </GoalState>
            <Route path='/auth' component={Auth} />
            <Route path='/aboutus' component={Aboutus}/>
            <Route path='/impact' component={Impact}/>
            <Route exact path='/' component={Home} />
          </Switch>
      </Router>
      </UserState>
    )
  }

}

export default App;
