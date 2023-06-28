import React from 'react'
import { Navigate } from "react-router-dom";

import PreloaderRound from '../PreloaderRound/PreloaderRound';

const ForbiddenForAuthRoute = ({ element: Component, ...props }) => {
  if (props.loggedIn === undefined) return <PreloaderRound />
  return (
    props.loggedIn ? <Navigate to='/' replace /> : <Component {...props} />
  )
}

export default ForbiddenForAuthRoute