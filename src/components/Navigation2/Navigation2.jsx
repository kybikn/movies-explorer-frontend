import React from 'react'
import './Navigation2.css'
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg'

function Navigation2() {
  return (
    <ul className="navigation__nav2">
      <li>
        <NavLink
          to="/movies"
          className="navigation__link2"
        >Фильмы</NavLink>
      </li>
      <li>
        <NavLink
          to="/saved-movies"
          className="navigation__link2"
        >Сохранённые фильмы</NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="navigation__link_active2"
        ><img src={profile} alt="Профиль"></img>Аккаунт</NavLink>
      </li>
    </ul>
  )
}

export default Navigation2