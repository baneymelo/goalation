/* eslint-disable no-unused-vars */
import {React, useState, useEffect, useContext} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dash from "./pages/Dash";
import ProtectedRoute from './components/Content/ProtectedRoute';
import { getToken, setToken} from "./helpers/auth";
import { Aboutus, Impact, Load } from "./components";
import AuthContext from './context/Auth/AuthContext'
import UserState from './context/User/UserState'
import GoalState from './context/Goal/GoalState'

const App = () => {

  const { auth: { isLogged, isLoading }, authenticate } = useContext(AuthContext)

  useEffect(() =>{
    authenticate()
  },[])

  if( getToken() && isLoading ){
    return <Load/>
  }else{
    return (
      <UserState>
      <GoalState>
      <Router>
          { isLogged && getToken() ? <Redirect to='/dashboard'/> : <Redirect to='/'/> }
          <Switch>
            <ProtectedRoute path='/dashboard' component={Dash}/>
            {/* <Route exact path="/dashboard" component={Dash}/> */}
            <Route path='/auth' component={Auth}/>
            <Route path='/aboutus' component={Aboutus}/>
            <Route path='/impact' component={Impact}/>
            <Route exact path='/' component={Home}/>
          </Switch>
      </Router>
      </GoalState>
      </UserState>
    )
  }

}

export default App;
