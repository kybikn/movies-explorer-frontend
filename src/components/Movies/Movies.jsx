import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useBreakpoints } from '../../hooks/useWidth';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/api/MoviesApi';
import mainApi from '../../utils/api/MainApi';
import { baseUrls, errorMessages } from '../../utils/constants';

function Movies() {

  const [movies, setMovies] = useState(
    () => {
      let moviesToShow = localStorage.getItem('movies');
      return moviesToShow ? JSON.parse(moviesToShow) : [];
    }
  );
  const [more, setMore] = useState(0);//сколько доп рядов показывать
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showOnlyShort, setShowOnlyShort] = useState(() => {
    let showOnlyShort = localStorage.getItem('showOnlyShort');
    return showOnlyShort ? JSON.parse(showOnlyShort) : false;
  });
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [searchText, setSearchText] = useState(() => {
    let searchText = localStorage.getItem('searchText');
    return searchText ? searchText : '';
  });

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

  let { s, m, l } = useBreakpoints({
    s: { min: 0, max: 767 },
    m: { min: 768, max: 1279 },
    l: { min: 1280, max: null },
  });

  let cardsAmount; let toAddMore;
  if (s) { cardsAmount = 5; toAddMore = 2 };
  if (m) { cardsAmount = 8; toAddMore = 2 }
  if (l) { cardsAmount = 12; toAddMore = 3 }

  function handleMore() {
    setMore(more + 1);
  }

  function handleSearch(searchText) {
    if (!searchText || !searchText.trim()) {
      setErrorMessage(errorMessages.text)
    } else {
      setIsLoading(true);
      Promise.all([moviesApi.getInitialMovies(), mainApi.getMovies()])
        // .then(([initialMovies, initialCards])
        // moviesApi.getInitialMovies()
        // .then((initialMovies) => {
        .then(([initialMovies, savedMovies]) => {
          const formattedMovies = formatMovies(initialMovies);
          let results = formattedMovies.filter(movie => movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchText.toLowerCase()));
          if (results.length === 0) { setErrorMessage(errorMessages.text); return };
          const savedIds = savedMovies.map(movie => movie.movieId);
          console.log('savedIds:', savedIds)
          const resultwWithLikes = results.map(movie => {
            // console.log('movie.movieId:', movie.movieId);
            movie.like = savedIds.includes(movie.movieId) ? true : false;
            return movie
          })
          setSearchText(searchText);
          setErrorMessage('');
          setMovies(resultwWithLikes);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(errorMessages.network);
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  function toggleLike(id) {
    console.log("сработал toggleLike, id:", id)
    let movie = movies.find(movie => movie.movieId === id);
    console.log("movie в toggleLike:", movie);
    if (movie.like) {
      mainApi.deleteMovie(id).then(() => {
        console.log('внутри then(deleted):')
        const updateMovies = movies.map(movie => {
          if (movie.movieId === id) {
            const newMovie = JSON.parse(JSON.stringify(movie));
            newMovie.like = false;
            return newMovie
          }
          return movie
        })
        console.log('updateMovies(deleted):', updateMovies)
        setMovies(updateMovies);
      }).catch((e) => console.log(e));
    } else {
      mainApi.createMovie(movie)
        .then(
          () => {
            const updateMovies = movies.map(movie => {
              if (movie.movieId === id) {
                const newMovie = JSON.parse(JSON.stringify(movie));
                newMovie.like = true;
                return newMovie
              }
              return movie
            })
            console.log('updateMovies(added):', updateMovies)
            setMovies(updateMovies);
          }
        ).catch((e) => console.log(e));
    }
  }

  useEffect(() => {
    localStorage.setItem('showOnlyShort', JSON.stringify(showOnlyShort));

  }, [showOnlyShort])

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  useEffect(() => {
    localStorage.setItem('searchText', searchText);
  }, [searchText])

  useEffect(() => {
    const filteredMovies = showOnlyShort ? movies.filter(movie => movie.duration <= 40) : movies;
    const moviesToShow = filteredMovies.slice(0, cardsAmount + (toAddMore * more));
    setMoviesToShow(moviesToShow);
  }, [cardsAmount, toAddMore, more, movies, showOnlyShort]);

  return (

    <div>
      <SearchForm onSearch={handleSearch} setShowOnlyShort={setShowOnlyShort} initialText={searchText} showOnlyShort={showOnlyShort} />
      <MoviesCardList movies={moviesToShow} errorMessage={errorMessage} isLoading={isLoading} onClick={toggleLike} />
      {(isLoading || moviesToShow.length === 0 || moviesToShow.length === movies.length || errorMessage) ? null : <Preloader onClick={handleMore} />}
    </div>
  )
}

export default Movies