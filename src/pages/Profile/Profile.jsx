import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext ';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { validateEmail } from '../../utils/validation';
import './Profile.css'

function Profile({ onSignOut, children, onProfile }) {
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();
  const userProfile = useContext(CurrentUserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [valuesChanged, setValuesChanged] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    onProfile({
      name: values.name,
      email: values.email,
      callback: () => {
        setIsSending(false);
        setIsEditing(false);
        resetForm();
      }
    })

  }

  function handleEdit() {
    setIsEditing(true);
    setValues({
      ...values,
      name: userProfile.name,
      email: userProfile.email
    })
  }

  useEffect(() => {
    document.title = "Movies - аккаунт";
  }, []);

  useEffect(() => { nameRef.current.focus(); }, [isEditing])

  function handleInputChange(e) {
    if (userProfile.name === nameRef.current.value
      && userProfile.email === emailRef.current.value
      && valuesChanged) {
      setValuesChanged(false)
    } else if (!valuesChanged) { setValuesChanged(true) }
    handleChange(e);
  }

  function handleClick() {
    onSignOut();
  }

  return (
    <div>
      <div className="main">
        <div className="profile">
          <h1 className="profile__title">Привет, {userProfile.name}!</h1>
          <form
            onSubmit={handleSubmit}
            className="profile__form">
            <fieldset className="profile__fieldset">
              <label className="profile__label">Имя</label >
              <input
                ref={nameRef}
                className="profile__input"
                value={values.name || ''}
                name="name"
                type="text"
                id="profile-name"
                placeholder={(!isEditing && userProfile.name) || ''}
                minLength={3}
                maxLength={40}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </fieldset>
            <span className="auth-error">
              {errors['name'] || ''}
            </span>
            <fieldset className="profile__fieldset">
              <label className="profile__label">E-mail</label >
              <input
                ref={emailRef}
                className="profile__input"
                value={values.email || ''}
                name="email"
                type="email"
                id="profile-email"
                placeholder={(!isEditing && userProfile.email) || ''}
                minLength={3}
                maxLength={40}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </fieldset>
            <span className="auth-error">
              {errors['email']
                || validateEmail(values.email).message
                || ''}
            </span>
            {children}
            {isEditing
              ? (<button
                className="auth-button auth-button_type_profile hover"
                aria-label="Сохранить"
                type="submit"
                onClick={(e) => setTimeout(handleSubmit(e), 50)}
                disabled={!isValid
                  || !valuesChanged
                  || isSending
                  || validateEmail(values.email).invalid}
              >Сохранить
              </button>)
              : (<button
                className="profile__button hover"
                aria-label="Редактировать профиль"
                type="button"
                onClick={() => setTimeout(handleEdit, 50)}
              >Редактировать
              </button>)}
          </form>
          <Link
            className="profile__link hover"
            to='/signin'
            onClick={handleClick}
          >Выйти из аккаунта
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile