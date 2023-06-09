import React from 'react'
import './Movies.css';
import Header2 from '../Header2/Header2';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <div className="movies">
      <Header2 />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
}

export default Movies