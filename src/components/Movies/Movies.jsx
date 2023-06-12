import React from 'react'

import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className="main">
      <HeaderMovies />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}

export default Movies