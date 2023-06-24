import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext ';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import './Profile.css'
import mainApi from '../../utils/api/MainApi';

function Profile({ onSignOut, setCurrentUser, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const { values, errors, isValid, setValues, handleChange, resetForm } = useFormAndValidation();
  const userProfile = useContext(CurrentUserContext);
  const [isSending, setIsSending] = useState(false);
  const [valuesChanged, setValuesChanged] = useState(false);
  const [updateResult, setUpdateResult] = useState(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    mainApi
      .editProfile({
        name: values.name,
        email: values.email
      })
      .then((profile) => {
        setCurrentUser(profile);
        setUpdateResult(
          {
            success: true,
            message: "Профиль успешно обновлен! X"
          });
        setIsEditing(false);
      })
      .catch((err) => {
        console.log(err);
        setUpdateResult({ success: false, message: "При обновлении профиля произошла ошибка. X" });
      })
      .finally(() => {
        setIsSending(false);
      });
    resetForm();
  }

  function handleEdit() {
    setIsEditing(true);
    setValues({
      ...values,
      name: userProfile.name,
      email: userProfile.email
    })
  }

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
                placeholder={userProfile.name}
                type="text"
                name="name"
                minLength={3}
                maxLength={40}
                required
                onChange={handleInputChange}
                value={values.name || ''}
                disabled={!isEditing}
              />
            </fieldset>
            <span className="auth__error">{errors['name'] || ''}</span>
            <fieldset className="profile__fieldset">
              <label className="profile__label">E-mail</label >
              <input
                ref={emailRef}
                className="profile__input"
                placeholder={userProfile.email}
                type="email"
                name="email"
                minLength={3}
                maxLength={40}
                required
                onChange={handleInputChange}
                value={values.email || ''}
                disabled={!isEditing}
              />
            </fieldset>
            <span className="auth__error">{errors['email'] || ''}</span>
            <div
              onClick={() => setUpdateResult(null)}
              className={"profile__update-status" + ((updateResult && updateResult.success)
                ? " profile__update-status_success"
                : " profile__update-error")}>{updateResult?.message || ''}
            </div>
            {isEditing
              ? (<button
                className="auth__button hover"
                aria-label="Сохранить"
                type="submit"
                onClick={(e) => setTimeout(handleSubmit(e), 50)}
                disabled={!isValid || !valuesChanged || isSending}
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