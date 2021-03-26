/* eslint-disable no-unused-vars */
import {React, useState, useEffect} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink
} from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import './App.css';
import { setToken, getToken, removeToken, initAxiosInterceptors } from "./helpers/auth";
import axios from './helpers/axios';

initAxiosInterceptors();

const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() =>{
    const verifySession = async () =>{
      if(getToken()){
        const {data: session} = await axios.get('/auth/session')
        setIsLogin(session)
      }
    }
    verifySession()
  },[])

  return (

    <Router>
    <div>
      <Auth />
    </div>
    </Router>


  );
}

export default App;
