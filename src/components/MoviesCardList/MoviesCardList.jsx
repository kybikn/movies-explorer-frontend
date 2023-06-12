import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList() {

  return (
    <section className='gallery' aria-label="Галерея карточек">
      <ul className='gallery__list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
      </ul>
      <Preloader />
    </section>
  )
}

export default MoviesCardList