import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
    component: Component,
    isAuth: islogged,
    ...rest
    
  }) => {
  
    return (
      <Route
        {...rest}
        render={props => {
          
            if(islogged) return <Component {...props} />
          
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