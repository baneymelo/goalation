import { React, useState, useReducer } from 'react'
import { AUTH_TYPES } from "../types";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { removeToken } from "../helpers/auth";
import axios from "../../helpers/axios";

const { AUTH, UNAUTH } = AUTH_TYPES;

const AuthState = ({children}) => {
  
  const initialAuthState = {
    logged: false,
    isLoading: true
  }    

  const [auth, dispatch] = useReducer(AuthReducer, initialAuthState)
  
  const authenticate = async () =>{
    const { data } = await axios.get('/auth/session')
    dispatch({ type: AUTH, payload: data })
  }

  const unAuthenticate = () =>{
    removeToken();
    dispatch({ type: UNAUTH, payload: false })
  }
  
  // SIGNIN/UP LOGIC 
  /* 
  const [getSignUp, setGetSignUp] = useState(false)
  const [userInf, setUserInf]     = useState({ 
    email: '',
    fullname: '',
    password: '',
    user_type: ''
  })
  

  const postData = async route => {
    const { data } = await axios.post(`/auth/${route}`, userInf);
    updateUser(data)
  }

  // DASH LOGIC 
  const initialGoalState = {
    name: '',
    period: '',
    category: '',
    amount: '',
    expire_date: Date(),
    noob: true
  }

  const [goal, setGoal] = useState(initialGoalState)
  const [allGoal, setAllGoal] = useState([initialGoalState])
  

  const postGoal = async goalForm => {
      const { data } = await axios.post('/goals/', goalForm);
      if(allGoal[0]?.noob) setAllGoal([goalForm])
      setAllGoal(prevGoals => [...prevGoals, goalForm])
      console.log(data);
  }

  const getGoals = async () => {
    const { data: { goals } } = await axios.get(`/goals/`);
    console.log(goals);
    goals && setAllGoal(goals)
  } 
   */
  
  return(
    <>
      <AuthContext.Provider value={{
        auth,
        authenticate,
        unAuthenticate,
      }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthState;