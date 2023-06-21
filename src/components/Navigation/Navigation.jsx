import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navigation.css'


function Navigation() {
  return (
    <div class="navigation">
      <ul className="navigation__nav">
        <li>
          <NavLink
            to='/signup'
            className="navigation__link hover"
          >Регистрация</NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className="navigation__link navigation__link_active hover"
          >Войти</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
