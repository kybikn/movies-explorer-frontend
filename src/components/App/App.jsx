import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const navigate = useNavigate();

  function handleRegister({ name, email, password }) {
    navigate('/signin', { replace: true });
  }

  function handleLogin({ email, password }) {
    navigate('/movies', { replace: true });
  }

  return (
    <div className="app">
      <Routes>
        {/* <Route
          path='/'
          element={<Main />}>
        </Route> */}
        <Route
          path='/'
          element={<ProtectedRouteElement
            element={Main} />}
        ></Route>
        <Route
          path='/movies'
          element={<Movies />}>
        </Route>
        <Route
          path='/saved-movies'
          element={<SavedMovies />}>
        </Route>
        <Route
          path="/profile"
          element={<Profile />} />
        <Route
          path='/signup'
          element={<Register onRegister={handleRegister} />} />
        <Route
          path="/signin"
          element={<Login onLogin={handleLogin} />} />
        <Route
          path='*'
          element={<NotFound />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
