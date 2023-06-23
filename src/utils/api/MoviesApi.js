import { baseUrls } from '../constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._moviesUrl = `${baseUrl}/beatfilm-movies`;
  }

  // обработчик ответа от сервера
  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(
        `Ошибка: ${response.status} ${response.statusText}`
      );
    }
  }

  // получение данных фильмов
  getInitialMovies() {
    return fetch(this._moviesUrl, {
      headers: this._headers,
      method: 'GET',
      // credentials: 'include',
    }).then(this._handleResponse);
  }
}

// ----- Инстанс класса Api --------
const moviesApi = new MoviesApi({
  baseUrl: baseUrls.moviesApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
