import { React, useState, useReducer, useContext } from 'react'
import { GOAL_TYPES } from "../types";
import GoalReducer from "./GoalReducer";
import AuthContext from "../Auth/AuthContext";
import UserContext from "../User/UserContext";
import GoalContext from "./GoalContext";
import axios from "../../helpers/axios";

const { SAVE, LOAD } = GOAL_TYPES;

const GoalState = ({children}) => {
  
  const initialGoalState = []

  const [ goal, dispatch ] = useReducer(GoalReducer, initialGoalState)

  const saveGoal = async goalForm => {
    const { data } = await axios.post('/goals/', goalForm)
    dispatch({ type: SAVE, payload: goalForm })
  }

  const loadGoals = async () => {
    const { data: goals } = await axios.get('/goals/')
    console.log(goals);
    dispatch({ type: LOAD, payload: goals })
  }

/*   const editGoal = async () => {
  } */

  return(
    <>
      <GoalContext.Provider value={{
          goal,
          saveGoal,
          loadGoals,
      }}>
        {children}
      </GoalContext.Provider>
    </>
  )
}

export default GoalState;