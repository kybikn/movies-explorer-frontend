import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path='/'
          element={<Main />}
        ></Route>
        <Route
          path='/movies'
          element={<Movies />}
        ></Route>
        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        ></Route>
        <Route path="/profile" element={<Profile
        />} />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route path="/signin" element={<Login
        />} />
        <Route
          path='*'
          element={<NotFound />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
