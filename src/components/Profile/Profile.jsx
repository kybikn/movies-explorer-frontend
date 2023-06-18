import React from 'react'
import { Link } from 'react-router-dom';

import './Profile.css'

function Profile() {
  return (
    <div>
      <div className="main">
        <div className="profile">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <fieldset className="profile__fieldset">
              <label className="profile__label">Имя</label >
              <input
                className="profile__input"
                placeholder="Виталий"
                type="text"
                minLength={3}
                maxLength={40}
                required />
            </fieldset>
            <span className="profile__error"></span>
            <fieldset className="profile__fieldset">
              <label className="profile__label">E-mail</label >
              <input
                className="profile__input"
                placeholder="pochta@yandex.ru"
                type="email"
                minLength={3}
                maxLength={40}
                required />
            </fieldset>
            <span className="profile__error"></span>
            <button className="profile__button hover" aria-label="Редактировать профиль">Редактировать</button>
          </form>
          <Link
            to='/signin'
            className="profile__link hover">Выйти из аккаунта
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile