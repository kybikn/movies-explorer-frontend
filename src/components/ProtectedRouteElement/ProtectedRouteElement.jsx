import React from 'react'
import { Navigate } from "react-router-dom";
import PreloaderRound from '../PreloaderRound/PreloaderRound';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  if (props.loggedIn === undefined) return <PreloaderRound />
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to='/' replace />
  )
}

export default ProtectedRouteElement
