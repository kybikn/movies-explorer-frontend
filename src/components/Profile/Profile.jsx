import React from 'react'
import { Link } from 'react-router-dom';
import HeaderMovies from '../HeaderMovies/HeaderMovies'
import './Profile.css'

function Profile() {
  return (
    <div>
      <HeaderMovies />
      <div className='main'>
        <div className='profile'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>

            <fieldset className='profile__fieldset'>
              <label className='profile__label'>Имя</label >
              <input
                className='profile__input' placeholder='Виталий'
                required />
            </fieldset>
            <span className="profile__error"></span>

            <fieldset className='profile__fieldset'>
              <label className='profile__label'>E-mail</label >
              <input
                className='profile__input' placeholder='pochta@yandex.ru'
                required />
            </fieldset>
            <span className="profile__error"></span>
            <button className='profile__button'>Редактировать</button>
            {/* <Link to='/signup' className='profile__button'>Редактировать</Link> */}
          </form>
          <Link to='/signin' className='profile__link'>Выйти из аккаунта</Link>
        </div>
      </div>
    </div>
  )
}

export default Profile