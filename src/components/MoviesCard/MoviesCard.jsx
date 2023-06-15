import { React } from 'react';

import CardButton from '../CardButton/CardButton';
import './MoviesCard.css';


function MoviesCard({ nameRU, duration, imageUrl, type }) {
  return (
    <li>
      <figure className='card'>
        <figcaption className='card__description'>
          <h3 className='card__title'>{nameRU}</h3>
          <p className='card__text'>{duration} минут</p>
        </figcaption>
        <img
          className='card__img'
          src={imageUrl}
          alt={nameRU}>
        </img>
        <CardButton type={type} />
      </figure>
    </li>
  )
}

export default MoviesCard