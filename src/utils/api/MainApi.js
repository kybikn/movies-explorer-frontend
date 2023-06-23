import { baseUrls } from '../constants';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._profileUrl = `${baseUrl}/users/me`;
    this._moviesUrl = `${baseUrl}/movies`;
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(
        `Ошибка: ${response.status} ${response.statusText}`
      );
    }
  }

  getProfile() {
    return fetch(this._profileUrl, {
      headers: this._headers,
      method: 'GET',
      credentials: 'include',
    }).then(this._handleResponse);
  }

  editProfile({ name, email }) {
    return fetch(this._profileUrl, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._handleResponse);
  }

  getMovies() {
    return fetch(this._moviesUrl, {
      headers: this._headers,
      method: 'GET',
      credentials: 'include',
    }).then(this._handleResponse);
  }

  createMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) {
    return fetch(this._moviesUrl, {
      headers: this._headers,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieId) {
    const deleteMoviesUrl = `${this._moviesUrl}/${movieId}`;
    return fetch(deleteMoviesUrl, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    }).then(this._handleResponse);
  }
}

// ----- Инстанс класса Api --------
const mainApi = new MainApi({
  baseUrl: baseUrls.mainApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;

// добавление лайка
// addLike(cardId) {
//   const likeCardsUrl = `${this._cardsUrl}/${cardId}/likes`;
//   return fetch(likeCardsUrl, {
//     headers: this._headers,
//     method: 'PUT',
//     credentials: 'include',
//   }).then(this._handleResponse);
// }

// удаление лайка
// deleteLike(cardId) {
//   const likeCardsUrl = `${this._cardsUrl}/${cardId}/likes`;
//   return fetch(likeCardsUrl, {
//     headers: this._headers,
//     method: 'DELETE',
//     credentials: 'include',
//   }).then(this._handleResponse);
// }

// изменение статуса лайка на требуемый
// changeLikeCardStatus(cardId, like) {
//   if (like) {
//     return this.addLike(cardId);
//   } else {
//     return this.deleteLike(cardId);
//   }
// }
