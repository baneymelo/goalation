import {React, useState, createContext, useEffect} from 'react'
import { getToken, setToken} from "../../helpers/auth";
import axios from "../../helpers/axios";


const AuthState = (props) => {
  
  const initialUserState = {
    user: {},
    loading: true,
    auth: false
  }    
  

  /* VERIFY SESSION LOGIC */

  const [user, setUser] = useState(initialUserState)
  
  const updateUser = (newUser) =>{
    setUser(newUser)
  }
  
  const verifySession = async () =>{
    const { data } = await axios.get('/auth/session')
    updateUser(data)
  }
  
  /* SIGNIN/UP LOGIC */
  
  const [getSignUp, setGetSignUp] = useState(false)
  const [userInf, setUserInf] = useState({ 
    email: '',
    fullname: '',
    password: '',
    user_type: ''
  })
  

  const postData = async route => {
    const { data } = await axios.post(`/auth/${route}`, userInf);
    updateUser(data)
  }

  /* DASH LOGIC */
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
  
  
  return(
    <>
      <AuthContext.Provider value={{
        user,
        updateUser,
        verifySession, 
        
        getSignUp, 
        setGetSignUp,
        
        userInf,
        setUserInf,
        postData,

        postGoal,
        getGoals,
        goal,
        setGoal,
        allGoal,
        setAllGoal,
        initialGoalState

      }}>

        {props.children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthState;

export const AuthContext  = createContext();