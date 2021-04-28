import React, { useContext } from "react";
import AuthContext from '../../context/Auth/AuthContext'
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
    component: Component,    
  }) => {

    const { auth } = useContext(AuthContext)
  
    return (
      <Route
        render={ props => {
          
            if(auth.logged) return <Component {...props} />
          
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            )
          }
        }
      />
    )
}