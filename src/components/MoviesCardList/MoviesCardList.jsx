import React from 'react'
import { useBreakpoints } from '../../hooks/useWidth';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList() {
  let { s, m, l } = useBreakpoints({
    sm: { min: 0, max: 767 },
    md: { min: 768, max: 1279 },
    lg: { min: 1280, max: null },
  });

  let cardsAmount = 12;
  if (s) cardsAmount = 5;
  if (m) cardsAmount = 8;
  if (l) cardsAmount = 12;

  const cards = [...Array(cardsAmount).keys()];

  return (
    <section className='gallery' aria-label="Галерея карточек">
      <ul className='gallery__list'>
        {cards.map((number) => <MoviesCard key={number.toString()} />)}
      </ul>
      <Preloader />
    </section>
  )
}

export default MoviesCardList