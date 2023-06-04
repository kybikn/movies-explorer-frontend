import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="navigation__nav">
      <li>
        <NavLink
          to="/signup"
          className="navigation__link"
        >Регистрация</NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className="navigation__link navigation__link_active"
        >Войти</NavLink>
      </li>
    </ul>
  )
}

export default Navigation
