import React from 'react'
import './Card.css';
import card from '../../images/card.jpg'
// import check from '../../images/check.svg'

function Card() {
  return (
    <li>
      <figure className='card'>
        <figcaption className='card__description'>
          <h3 className='card__title'>В погоне за Бенкси</h3>
          <p className='card__text'>27 минут</p>
        </figcaption>
        <img className='card__img' src={card} alt="Карточка"></img>
        {/* <button
          className='card__button_active'
          type='button'
        ><img src={check} alt="Кнопка"></img></button> */}
        <button
          className='card__button'
          type='button'
        >Сохранить</button>
      </figure>
    </li>
  )
}

export default Card