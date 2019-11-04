import React from 'react'
import {Redirect,Route} from 'react-router-dom'
import useAuth from "../hook/useAuth";


function PrivateRoute(props) {
  const  loggedIn=useAuth();
console.log(loggedIn)
    return loggedIn ? <Route {...props}/>  :  <Redirect to='/login' /> ;
}

export  default PrivateRoute