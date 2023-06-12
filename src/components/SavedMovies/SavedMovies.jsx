import React from 'react'

import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <div className="movies">
      <HeaderMovies />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}

export default SavedMovies