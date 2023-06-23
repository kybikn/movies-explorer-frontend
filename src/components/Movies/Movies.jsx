import React, { useEffect, useState } from 'react'
import { useBreakpoints } from '../../hooks/useWidth';
// import { beatfilmMovies, baseUrl } from '../../mockData/movies';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';
import { baseUrls } from '../../utils/constants';

function Movies({ loggedIn }) {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [more, setMore] = useState(0);

  function formatMovies(moviesToFormat) {
    const formattedMovies = moviesToFormat.map(movie => {
      return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: baseUrls.moviesApi + movie.image.url,
        thumbnail: baseUrls.moviesApi + movie.image.formats.thumbnail,
        movieId: movie.id
      }
    })
    return formattedMovies
  }

  function handleSearch(text) {
    if (!text) {
      setMovies(allMovies)
    } else {
      const results = allMovies.filter(movie => movie.nameRU.toLowerCase().includes(text.toLowerCase()) || movie.nameEN.toLowerCase().includes(text.toLowerCase()))
      setMovies(results);
    }
  }

  let { s, m, l } = useBreakpoints({
    s: { min: 0, max: 767 },
    m: { min: 768, max: 1279 },
    l: { min: 1280, max: null },
  });

  let cardsAmount;
  if (s) cardsAmount = 5;
  if (m) cardsAmount = 8;
  if (l) cardsAmount = 12;

  function handleMore() {
    setMore(more + 1);
  }

  useEffect(() => {
    moviesApi.getInitialMovies()
      .then((initialMovies) => {
        const formattedMovies = formatMovies(initialMovies);
        setAllMovies(formattedMovies);
        setMovies(formattedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    const moviesToShow = movies.slice(0, cardsAmount * (1 + more));
    setMoviesToShow(moviesToShow);
  }, [cardsAmount, more, movies]);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList movies={moviesToShow} />
      <Preloader onClick={handleMore} />
    </div>
  )
}

export default Movies