import React from 'react'
import { NavLink } from 'react-router-dom';

import './AuthForm.css'
import Logo from '../Logo/Logo';
import { validateEmail } from '../../utils/validation';

function AuthForm({ children, formName, title, onSubmit, onChange, btnText, text, link, values, errors, isValid }) {
  return (
    <div>
      <div className="auth">
        <Logo />
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
                  value={values.name || ''}
                  name="name"
                  type="text"
                  id="auth-text"
                  placeholder="Имя"
                  minLength={3}
                  maxLength={40}
                  onChange={onChange}
                  required />
                <span className="auth-error">
                  {errors['name'] || ''}
                </span>
              </label >
              : ''}
            <label className="auth__label">E-mail
              <input
                className="auth__input"
                value={values.email || ''}
                name="email"
                type="email"
                id="auth-email"
                placeholder="E-mail"
                minLength={3}
                maxLength={40}
                onChange={onChange}
                required />
              <span className="auth-error">
                {errors['email']
                  || validateEmail(values.email).message
                  || ''}
              </span>
            </label >
            <label className="auth__label">Пароль
              <input
                className="auth__input"
                value={values.password || ""}
                name="password"
                type="password"
                id="auth-password"
                placeholder="Пароль"
                minLength={6}
                maxLength={20}
                onChange={onChange}
                required />
              <span className="auth-error">{errors['password'] || ''}</span>
            </label >
            <button
              className="auth-button hover"
              type="submit"
              disabled={!isValid || validateEmail(values.email).invalid}
              area-label={btnText}
            >{btnText}
            </button>
          </fieldset>
          {children}
        </form>
        <div className="auth__footer">
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