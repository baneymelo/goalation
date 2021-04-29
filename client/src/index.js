import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthState from "../src/context/Auth/AuthState";
import { initAxiosInterceptors } from "./helpers/auth";

initAxiosInterceptors()

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


