import React from 'react'
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'><img src={logo} alt="Логотип"></img></Link>
        <Navigation />
      </div>
    </header >
  )
}

export default Header
