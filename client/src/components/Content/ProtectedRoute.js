import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Load } from "../index";
import AuthContext from '../../context/Auth/AuthContext'

const ProtectedRoute = ({
    component: Component,
    ...rest 
  }) => {

  const { auth: { isLogged, isLoading } } = useContext(AuthContext)

  return (
    <Route
    {...rest}
      render={ props => {
        
        isLoading && <Load />
        
        if(isLogged) return <Component {...props} />
        
        return (<Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location
              }
            }}
          />)
      }}
    />
  )
}

export default ProtectedRoute;