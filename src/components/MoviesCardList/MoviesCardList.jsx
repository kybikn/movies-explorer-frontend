import React from 'react'
import './MoviesCardList.css';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {

  return (
    <section className='gallery' aria-label="Галерея карточек">
      <div>
        <ul className='gallery__list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
      <div>
        <Preloader />
      </div>
    </section>

  )
}

export default MoviesCardList