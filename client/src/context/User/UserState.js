import { React, useState, useReducer, useContext } from 'react'
import { USER_TYPES } from "../types";
import UserReducer from "./UserReducer";
import AuthContext from "../Auth/AuthContext";
import UserContext from "./UserContext";
import axios from "../../helpers/axios";

const { LOGIN, LOGOUT } = USER_TYPES;

const UserState = ({children}) => {
  
  const initialUserState = {
    email: '',
    fullname: '',
    goals_id: [],
    rewards: [],
    user_type: ''
  }
    
  const [user, dispatch] = useReducer(UserReducer, initialUserState)
  const { authenticate, unAuthenticate} = useContext(AuthContext)
  
  const login = async userForm => {
    const { data } = await axios.post('/auth/signin', userForm); 
    dispatch({ type: LOGIN, payload: data.user })
    authenticate()
  }

  const register = async userForm => {
    const { data } = await axios.post('/auth/signup', userForm); 
    dispatch({ type: LOGIN, payload: data.user })
    authenticate()
  }

  const logout = () => {
    dispatch({ type: LOGOUT, payload: initialUserState })
    unAuthenticate()
  }  
  return(
    <>
      <UserContext.Provider value={{        
        user,
        login,
        register,
        logout,
      }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserState;