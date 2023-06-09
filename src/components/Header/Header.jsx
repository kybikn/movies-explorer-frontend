import React from 'react'
import Navigation from '../Navigation/Navigation';
import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <img src={logo} alt='Логотип'></img>
        </div>
        <Navigation />
      </div>
    </header >
  )
}

export default Header
