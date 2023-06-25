import { baseUrls } from './constants';

class AuthApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._loginUrl = `${baseUrl}/signin`;
    this._registerUrl = `${baseUrl}/signup`;
    this._logoutUrl = `${baseUrl}/signout`;
  }

  _handleResponse(response) {
    if (response.ok) {
      // парсит json файл и возвращает js обьект
      return response.json();
    } else {
      // возвращает reject ошибку
      return Promise.reject(
        `Ошибка: ${response.status} ${response.statusText}`
      );
    }
  }

  register = (name, email, password) => {
    return fetch(this._registerUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  };

  login = (email, password) => {
    return fetch(this._loginUrl, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  };

  logout = () => {
    return fetch(this._logoutUrl, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    }).then(this._handleResponse);
  };
}

// ----- Инстанс класса MainApi --------
const auth = new AuthApi({
  baseUrl: baseUrls.mainApi,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default auth;
