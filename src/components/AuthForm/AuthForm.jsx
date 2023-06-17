import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './AuthForm.css'
import logo from '../../images/logo.svg'

function AuthForm({ children, formName, title, onSubmit, onChange, btnText, text, link, values, errors, isValid }) {
  return (
    <div className="main">
      <div className="auth">
        <Link to='/'>
          <img
            className='header__img hover'
            src={logo}
            alt="Логотип">
          </img>
        </Link>
        <h2 className="auth__title">{title}</h2>
        <form
          className="auth__form"
          name={formName}
          onSubmit={onSubmit}
        >
          <fieldset className="auth__box">
            {formName === 'signup'
              ?
              <label className="auth__label">Имя
                <input
                  className="auth__input"
                  value={values.name || ""}
                  name="name"
                  type="text"
                  minLength={3}
                  maxLength={40}
                  onChange={onChange}
                  required />
                <span className="auth-error">{errors['name'] || ''}</span>
              </label >
              : ''}
            <label className="auth__label">E-mail
              <input
                className="auth__input"
                value={values.email || ""}
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
                name="password"
                type="password"
                minLength={6}
                maxLength={20}
                onChange={onChange}
                required />
              <span className="auth-error">{errors['password'] || ''}</span>
            </label >
            <button
              className="auth__button hover"
              type='submit'
              disabled={!isValid}
            >{btnText}
            </button>
          </fieldset>
          {children}
        </form>
        <div className='auth__footer'>
          <p className="auth__text">{text}</p>
          {formName === 'signup'
            ? (<NavLink
              to='/signin'
              className="auth__link hover">{link}
            </NavLink>)
            : (<NavLink
              to='/signup'
              className="auth__link hover">{link}
            </NavLink>)
          }
        </div>
      </div>
    </div >
  )
}

export default AuthForm