import React from 'react'
import Navigation2 from '../Navigation2/Navigation2';
import './Header2.css';
import logo from '../../images/logo.svg'

function Header2() {
  return (
    <header className="header2">
      <div className="header__container2">
        <div className="header__logo2"><img src={logo} alt="Логотип"></img></div>
        <Navigation2 />
      </div>
    </header >
  )
}

export default Header2