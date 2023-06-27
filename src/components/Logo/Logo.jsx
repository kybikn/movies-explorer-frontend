import React from 'react'
import { Link } from 'react-router-dom';

import './Logo.css';
import logo from '../../images/logo.svg'

function Logo() {
  return (
    <Link to='/'>
      <img
        className="logo-img hover"
        src={logo}
        alt="Логотип">
      </img>
    </Link>
  )
}

export default Logo