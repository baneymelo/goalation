import {React, useState, createContext, useEffect} from 'react'

import axios from '../../helpers/axios';
import { getToken, setToken} from "../../helpers/auth";
export const AuthContext  = createContext();

const AuthState = (props) => {
    
    const [isLogged, setIsLogged] = useState(false)
    const [getSignUp, setGetSignUp] = useState(false)

/* useEffect to verifySession */

    useEffect(() =>{
        const verifySession = async () =>{
          if(getToken()){
            const {data: session} = await axios.get('/auth/session')
            session ? setIsLogged(true) : setIsLogged(false)
            console.log(session);
          }
        }
        verifySession()
      },[setIsLogged])

/* useEffect to SIGNIN/UP */

    const [data, setData] = useState({ 
        email: '',
        fullname: '',
        password: '',
        user_type: ''
    })
    const [flagRoute, setFlagRoute] = useState([false, ''])
    
    useEffect(() =>{

      const postData = async (route) =>{
          const request = await axios.post(`/auth/${route}`, data);
          setToken(request.data.token)
          console.log(request.data.token);
      }
      
      flagRoute[0] && postData(flagRoute[1])

  },[data, flagRoute]) 
  

    return(
        <>
        <AuthContext.Provider value={{
            isLogged,
            setIsLogged,

            getSignUp, 
            setGetSignUp,

            data,
            setData,
            flagRoute,
            setFlagRoute
            }}>

            {props.children}
        </AuthContext.Provider>
        </>
    )
}

export default AuthState;
