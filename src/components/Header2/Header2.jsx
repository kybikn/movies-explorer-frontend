import React from 'react'
import Navigation2 from '../Navigation2/Navigation2';
import './Header2.css';
import logo from '../../images/logo.svg'

function Header2() {
  return (
    <header className="header2">
      <div className="header__container2">
        <div className="header__logo2">
          <img src={logo} alt="Логотип"></img>
        </div>
        <div className='burger'>
          <span className='burger__line burger__line_up'></span>
          <span className='burger__line burger__line_middle'></span>
          <span className='burger__line burger__line_down'></span>
        </div>
        <Navigation2 />
      </div>
    </header >
  )
}

export default Header2