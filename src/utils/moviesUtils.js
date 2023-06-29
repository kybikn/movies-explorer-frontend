import { YOUTUBE_ID_REGEX } from './constants';

// Преобразование формата фильмов из beastfilms в формат фильмов на нашем сервере
export function formatMovies(moviesToFormat, baseUrl) {
  const formattedMovies = moviesToFormat.map((movie) => {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: baseUrl + movie.image.url,
      thumbnail: baseUrl + movie.image.formats.thumbnail,
      movieId: movie.id,
    };
  });
  return formattedMovies;
}

// Фильтр фильмов по тексту поиска
export function filterMovies(formattedMovies, searchText) {
  let results = formattedMovies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchText.toLowerCase())
  );
  return results;
}

export function addLikeToMovieInList(movies, id) {
  const moviesWithLike = movies.map((movie) => {
    if (movie.movieId === id) {
      // Глубокое копирование объекта
      const newMovie = JSON.parse(JSON.stringify(movie));
      newMovie.like = true;
      return newMovie;
    }
    return movie;
  });
  return moviesWithLike;
}

export function deleteLikeToMovieInList(movies, id) {
  const moviesNoLike = movies.map((movie) => {
    if (movie.movieId === id) {
      // Глубокое копирование объекта
      const newMovie = JSON.parse(JSON.stringify(movie));
      newMovie.like = false;
      return newMovie;
    }
    return movie;
  });
  return moviesNoLike;
}

export function deleteMovieFromList(movies, id) {
  const updatedMovies = movies.filter((movie) => movie.movieId !== id);
  return updatedMovies;
}

export function extractVideoID(url) {
  const regExp = YOUTUBE_ID_REGEX;
  const match = url.match(regExp);
  if (match && match[7].length === 11) {
    return match[7];
  } else {
    console.log('Could not extract video ID.');
  }
}