import {React, useState, createContext, useEffect} from 'react'
import { getToken, setToken} from "../../helpers/auth";
import axios from "../../helpers/axios";

export const AuthContext  = createContext();

const AuthState = (props) => {

    const initialUserState = {
        user: {},
        loading: true,
        auth: false
      }    
    
    const [user, setUser] = useState(initialUserState)
    
    
    const verifySession = async () =>{
      const { data } = await axios.get('/auth/session')
      setUser(data)
    }
    
    /* useEffect to SIGNIN/UP */
    
    const [getSignUp, setGetSignUp] = useState(false)
    const [userInf, setUserInf] = useState({ 
        email: '',
        fullname: '',
        password: '',
        user_type: ''
    })
    /* const [flagRoute, setFlagRoute] = useState([false, '']) */

    const updateUser = (newUser) =>{
      setUser(newUser)
    }
    
    const postData = async route =>{
      console.log("Context: ",route);
      const { data } = await axios.post(`/auth/${route}`, userInf);
      setUser(data)
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
        postData
        }}>

        {props.children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthState;