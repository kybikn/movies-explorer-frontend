import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './AuthForm.css'
import logo from '../../images/logo.svg'

function AuthForm({ formName, title, onSubmit, onChange, btnText, text, link, values, errors, isValid }) {
  return (
    <div className="main">
      <div className="auth">
        <Link to='/'>
          <img src={logo} alt="Логотип"></img>
        </Link>
        <h2 className="auth__title">{title}</h2>
        <form
          className="auth__form"
          name={formName}
          onSubmit={onSubmit}
        >
          <fieldset className="auth__box">
            {formName === 'signup' ?
              <label className="auth__label"
              >Имя
                <input
                  className="auth__input"
                  value={values.name || ""}
                  placeholder='Виталий'
                  name="name"
                  type="text"
                  minLength={3}
                  maxLength={40}
                  onChange={onChange}
                  required />
                <span className="auth-error">{errors['name'] || ''}</span>
              </label > : ''}
            <label className="auth__label">E-mail
              <input
                className="auth__input"
                value={values.email || ""}
                placeholder='pochta@yandex.ru|'
                name="email"
                type="email"
                minLength={3}
                maxLength={40}
                onChange={onChange}
                required />
              <span className="auth-error">{errors['email'] || ''}</span>
            </label >
            <label className="auth__label">Пароль
              <input
                className="auth__input auth-input-error"
                value={values.password || ""}
                placeholder='••••••••••••••'
                name="password"
                type="password"
                minLength={6}
                maxLength={20}
                onChange={onChange}
                required />
              <span className="auth-error">{errors['password'] || ''}</span>
            </label >
            <button className="auth__button"
              type='submit'
              disabled={!isValid}
            >{btnText}
            </button>
          </fieldset>
        </form>
        <div className='auth__footer'>
          <p className="auth__text">{text}</p>
          {formName === 'signup' ? (<NavLink to='/signin'
            className="auth__link">{link}</NavLink>) :
            (<NavLink to='/signup'
              className="auth__link">{link}</NavLink>)
          }
        </div>
      </div>
    </div >
  )
}

export default AuthForm