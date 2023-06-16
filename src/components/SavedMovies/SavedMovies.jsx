import React from 'react'

import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedDevider from '../SavedDevider/SavedDevider';
import Footer from '../Footer/Footer';
import { savedMovies } from '../../mockData/saved-movies';

function SavedMovies() {
  return (
    <div className="main">
      <HeaderMovies />
      <SearchForm />
      <MoviesCardList movies={savedMovies} type='savedMovies' />
      <SavedDevider />
      <Footer />
    </div>
  )
}

export default SavedMovies